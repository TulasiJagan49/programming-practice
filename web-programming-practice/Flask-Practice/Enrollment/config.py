import os

class Config(object):

    SECRET_KY = os.environ.get('SECRET_KEY') or "12345Yuiop*`"
    