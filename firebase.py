import pyrebase
from mcu import MCU
import time

from threading import Thread
class Firebase(Thread):
    config = {
        "apiKey": "AIzaSyB_TKkQ-I8WdssJMP8qxeGoxdB01gjWLDs",
        "authDomain": "greenhouse-e4197.firebaseapp.com",
        "databaseURL": "https://greenhouse-e4197.firebaseio.com",
        "projectId": "greenhouse-e4197",
        "storageBucket": "greenhouse-e4197.appspot.com",
        "messagingSenderId": "243165154492"
    }

    def __init__(self):
        Thread.__init__(self)
        firebase = pyrebase.initialize_app(Firebase.config)
        self.db = firebase.database()
        # my_stream = db.child("users").stream(self.stream_handler)
        self.start()

    def run(self):
        while(len(MCU.sensors) <= 0): pass
        while(len(MCU.sensors) > 0):
            data = { "sensors": MCU.sensors }
            self.db.child("user_name").update(data)
            time.sleep(5)

    def stream_handler(self,message):
        print(message["event"]) # put
        print(message["path"]) # /-K7yGTTEp7O549EzTYtI
        print(message["data"]) # {'title': 'Pyrebase', "body": "etc..."}