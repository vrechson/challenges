FROM python:3

RUN pip3 install -v gunicorn

RUN pip3 install flask Flask-Limiter requests

COPY . .

WORKDIR app

CMD gunicorn --bind 0.0.0.0:5000 app:app
