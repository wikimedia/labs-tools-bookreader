# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, abort
import requests
import urllib

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/read', methods=['GET'])
def read():
    if request.method == 'GET':
        data_v = {}

        # Get Decoded file URL
        wiki_file = request.args.get("file", '')
        wiki_file = urllib.parse.unquote(wiki_file)

        # Check whether ?file is given or not
        if wiki_file == '':
            para_missing = 'file parameter is missing'
            return render_template('error.html', msg=para_missing)

        # Get file name
        file_array = wiki_file.split('/')
        filename = file_array[-1]

        # Get lang and project
        lang = file_array[2].split('.')[0]
        project = file_array[2].split('.')[1]
        data_v["lang"] = lang
        data_v["project"] = project

        url = 'https://{0}.{1}.org/w/api.php'.format(lang, project)

        params = {
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "titles": filename,
            "utf8": 1,
            "formatversion": "2",
            "iiprop": "url|size"
        }
        r = requests.get(url=url, params=params)
        data = r.json()

        try:
            page = data["query"]["pages"][0]
            data_v["book_url"] = page["imageinfo"][0]["url"]
            data_v["numofpage"] = page["imageinfo"][0]["pagecount"]

            return render_template('read.html', data=data_v)

        except KeyError as ex:
            return render_template('error.html', msg=ex)

    else:
        abort(400)


if __name__ == '__main__':
    app.run()
