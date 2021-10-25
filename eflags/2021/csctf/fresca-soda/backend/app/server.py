from flask import Flask, abort, request, redirect
import os

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 512

@app.route("/", methods=["GET"])
def root():
    request.environ['wsgi.input_terminated'] = True
    return "<h1>Welcome to Fresca Soda Storage!</h1><br><br>Look at our awesome content!<ul><li><a href='/about'>About</a></li><li><a href='/news'>News</a></li><li><a href='/receipt'>Receipt</a></li></ul>  ", 200

@app.route("/about", methods=["GET"])
def about():
    request.environ['wsgi.input_terminated'] = True
    return "<h3><strong>Hey! Do you want some Fresca?</strong></h3><br><br><br>Just give it a try!<br><br><br><a href='/back'>back</a>", 200

@app.route("/news", methods=["GET"])
def news():
    request.environ['wsgi.input_terminated'] = True
    return "<h3><strong>Why not feel like a hero?</strong></h3><br><br><br>We are glad to announce that Fresca is the first one in soda market, can you <strong>believe it?</strong><br><br><br><a href='/back'>back</a>", 200

@app.route("/receipt", methods=["GET"])
def receipt():
    request.environ['wsgi.input_terminated'] = True
    if 'X-NOT-HEROES-ALLOWED' not in request.headers or request.headers['X-NOT-HEROES-ALLOWED'] != 's3cr3t_h3ad3r_t0_w1n':
        return "Access Denied! Missing administration header.", 200
    return os.getenv("FLAG"), 200

@app.route("/back", methods=["GET"])
def files():
    request.environ['wsgi.input_terminated'] = True
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(host='0.0.0.0')