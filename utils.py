import requests


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
