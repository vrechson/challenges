from flask import Flask, render_template, request, url_for, redirect
from flask_limiter.util import get_remote_address
import requests

# Configuration
app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/quotes')
def quotes():
    return render_template('quotes.html')

@app.route('/admin', methods=['POST', 'GET'])
def admin():
    if request.method == 'POST':
        url = request.form['url']
        if url == '':
            return render_template('index.html')
            
        requests.post('http://ademir:3000/add-87ytgvhbjnk', data={'url': url, 'secret': 'pwn2win-is-even-more-secure-with-this-r34lly-s3cur3-s3cre7'})
    
    return redirect(url_for('root'))

# Exporting server
if __name__ == '__main__':
    app.run(host='0.0.0.0')