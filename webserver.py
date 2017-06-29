from flask import Flask, render_template,send_from_directory
from flask_socketio import SocketIO,join_room,emit
import threading
import time
import sys
sys.path.insert(0, '../')
from mcu import MCU

from config import Config




class WebServer(threading.Thread):
    app = Flask(__name__,static_folder='static')
    app.config['SECRET_KEY'] = 'secret!'
    socketio = SocketIO(app)
    @socketio.on('REQ_SENSORS')
    def handle_my_custom_event(json):
        emit("SENSOR_DATA", MCU.sensors, broadcast=True)

    @app.route('/')
    def webprint():
        return render_template('webcode.html') 

    @socketio.on('REQ_SETTING')
    def req_setting():
        data = {
            'timer_list': Config.timer_list,
            'detecting_list': Config.detecting_list
        }
        emit("REP_SETTING", data, broadcast=True)
    
    @socketio.on('UPDATE_TIMER')
    def update_timer(data):
        Config.timer_list['fan'] = data['fan']
        Config.timer_list['pump'] = data['pump']
        Config.timer_list['led'] = data['led']
        Config.UpdateConfig()
        time.sleep(2)
        emit("TIMER_SUCCESS", {"data": "success"})

    @socketio.on('UPDATE_DETECTING')
    def update_detecting(data):
        Config.detecting_list['ec'] = data['ec']
        Config.detecting_list['ph'] = data['ph']
        Config.detecting_list['co2'] = data['co2']
        Config.UpdateConfig()
        time.sleep(2)
        emit("DETECTING_SUCCESS", {"data": "success"})

    @socketio.on('connect')
    def connect():
        print ("[Info] Client connected")
        join_room('0x01')


    def __init__(self):
        threading.Thread.__init__(self)
        self.start()

    def run(self):
        WebServer.socketio.run(WebServer.app,port=8000)

class SendSensor(threading.Thread):

     def __init__(self):
        threading.Thread.__init__(self)
        self.start()

     def run(self):
        while(True):
            WebServer.socketio.emit("test", {"data": "test"}, broadcast=True)
            time.sleep(2)

