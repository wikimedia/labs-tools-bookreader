# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, abort, \
    redirect, url_for
from flask_jsonlocale import Locales
import requests
import urllib
import os

app = Flask(__name__)
app.config["MESSAGES_DIR"] = "messages"
app.config["SECRET_KEY"] = os.urandom(24)
locales = Locales(app)
_ = locales.get_message


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/read', methods=['GET'])
def read():
    if request.method == 'GET':
        data_v = {}

        # Get Decoded file URL
        wiki_file_url = request.args.get("file", '')
        wiki_file_url = urllib.parse.unquote(wiki_file_url)

        # Check whether ?file is given or not
        if wiki_file_url == '':
            para_missing = 'file parameter is missing'
            return render_template('error.html', msg=para_missing)

        # Get file name
        file_array = wiki_file_url.split('/')
        file_name = file_array[-1]

        # Get lang and project
        lang = file_array[2].split('.')[0]
        project = file_array[2].split('.')[1]
        data_v["lang"] = lang
        data_v["project"] = project

        url = 'https://{0}.{1}.org/w/api.php'.format(lang, project)
        data = getImageInfo(url, file_name)

        try:
            page = data["query"]["pages"][0]
            data_v["book_url"] = page["imageinfo"][0]["url"]
            data_v["numofpage"] = page["imageinfo"][0]["pagecount"]

            # Hot fix to load commons image with local URL
            try:
                if page["missing"] is True:
                    data_v["project"] = "commons"
            except KeyError:
                pass

            return render_template('read.html', data=data_v)

        except KeyError as ex:
            return render_template('error.html', msg=ex)

    else:
        abort(400)


@app.route('/<lang>/<file_name>', methods=['GET'])
def readbyname(lang, file_name):
    if request.method == 'GET':
        file_name = urllib.parse.unquote(file_name)
        data_v = {}
        data_v["lang"] = lang
        data_v["project"] = 'wikisource'

        url = 'https://{0}.wikisource.org/w/api.php'.format(lang)
        data = getImageInfo(url, file_name)

        try:
            page = data["query"]["pages"][0]
            data_v["book_url"] = page["imageinfo"][0]["url"]
            data_v["numofpage"] = page["imageinfo"][0]["pagecount"]

            # Hot fix to load commons image with local URL
            try:
                if page["missing"] is True:
                    data_v["project"] = "commons"
            except KeyError:
                pass

            return render_template('read.html', data=data_v)

        except KeyError as ex:
            return render_template('error.html', msg=ex)
    else:
        abort(400)


def getImageInfo(url, filename):
    # Remove prefix
    filename = filename.split(':')
    filename = filename[1] if len(filename) > 1 else filename[0]

    params = {
        "action": "query",
        "format": "json",
        "prop": "imageinfo",
        "titles": "File:" + filename,
        "utf8": 1,
        "formatversion": "2",
        "iiprop": "url|size"
    }
    r = requests.get(url=url, params=params)
    return r.json()


@app.route('/changelang', methods=['GET', 'POST'])
def changelang():
    if request.method == "POST":
        locales.set_locale(request.form['locale'])
        return redirect(url_for('index'))

    lcs = locales.get_locales()
    per_lce = locales.get_permanent_locale()
    return render_template('changelanguage.html', locales=lcs, permanent_locale=per_lce)


if __name__ == '__main__':
    app.run()
