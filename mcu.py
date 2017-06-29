import serial
import threading
import time
from log import Log

class MCU(threading.Thread):
    
    sensors = {}
    def __init__(self):
        threading.Thread.__init__(self)
        self.log = Log()
        self.log.log({"hello":"Hello"})
        while not self.getPort():
            time.sleep(3)
        self.running = True
        self.start()
        
    def run(self):
        state = False
        dataStr = ""
        while(self.running):
            ch = self.ser.read()
            if ch == '{':
                state = True
            elif state:
                dataStr += ch
            if ch == '}':
                self.extractData(dataStr)
                state=False
                dataStr = ""
                continue

    def extractData(self,data):
        data = data.replace("}", "")
        data = data.replace("{", "")
        data = data.split(",")
        try:
            if(len(data) == 5):
                MCU.sensors['co2'] = int(data[0])
                MCU.sensors['ec'] = float(data[1])
                MCU.sensors['ph'] = float(data[2])
                MCU.sensors['temp'] = float(data[3])
                MCU.sensors['humi'] = float(data[4])
        except ValueError:
            print("[Error] Value Error")
            self.log.log({ "type":"Error" , "message":"ValueError exception, Track MCU.extractData()"})
            return
            
    def getPort(self):
        port = '/dev/ttyACM0'
        try:
            self.ser = serial.Serial(port,115200)
            print("[Info] Serial port open successful")
            self.log.log({ "type":"Info" , "message":"Serial port open successful"})
            return True
        except serial.serialutil.SerialException:
            print("[Error] Serial port could not open properly.")
            self.log.log({ "type":"Error" , "message":"[Error] Serial port could not open properly."})
            return False
    
    def stop(self):
        self.running = False
    def __del__(self):
        self.stop()