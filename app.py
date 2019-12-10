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

        # Get File URL
        wiki_file = request.args.get("file", '')
        wiki_file = urllib.parse.unquote(wiki_file)

        if wiki_file == '':
            return render_template('error.html', msg= 'file parameter is missing' )

        file_array = wiki_file.split('/')
        filename = file_array[-1]

        url = 'https://commons.wikimedia.org/w/api.php'

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
            data_v["book_url"] = data["query"]["pages"][0]["imageinfo"][0]["url"]
            data_v["numofpage"] = data["query"]["pages"][0]["imageinfo"][0]["pagecount"]

            return render_template('read.html', data=data_v)

        except:
            return render_template('error.html', msg='')

    else:
        abort(400)


if __name__ == '__main__':
    app.run()
