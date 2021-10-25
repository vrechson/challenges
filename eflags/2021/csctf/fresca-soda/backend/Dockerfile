FROM python:3

# Install packages
RUN pip3 install -v gunicorn==20.0.4

RUN pip3 install Flask

RUN pip install gunicorn[gevent]

COPY . .

WORKDIR app

CMD gunicorn --keep-alive 10 -k gevent --bind 0.0.0.0:5000 -w 4 app:app