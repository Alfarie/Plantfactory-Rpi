import threading
import time
from pymongo import MongoClient
from datetime import datetime
from mcu import MCU

class DataLogger(threading.Thread):

    def __init__(self):
        threading.Thread.__init__(self)
        self.client = MongoClient('mongodb://localhost:27017')
        self.db = self.client['plantfactory']
        self.datalogger = self.db.datalogger
        self.start()

    def run(self):
        time.sleep(10)
        while(True):
            time.sleep(300)
            if(len(MCU.sensors) == 5):
                data = {}
                data['datetime'] = str(datetime.now())
                data['ec'] = MCU.sensors['ec']
                data['ph'] = MCU.sensors['ph']
                data['co2'] = MCU.sensors['co2']
                data['humi'] = MCU.sensors['humi']
                data['temp'] = MCU.sensors['temp']
                self.datalogger.insert_one(data)
            