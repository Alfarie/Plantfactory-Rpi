import threading
import time
from config import Config
from mcu import MCU
import datetime

class Auto(threading.Thread):
    lock = threading.Lock()
    def __init__(self, name, relay_ch):
         threading.Thread.__init__(self)
         self.relay_ch = relay_ch
         self.name = name
         self.running = True

    def run(self):
        while(self.running):
             if(len(MCU.sensors) == 5):
                self.config_list = Config.detecting_list[self.name]
               
                if(not self.config_list['enable']):
                    continue
                self.s_print(self.name + ":" + str(MCU.sensors[self.name]) + ", relay:" + str(self.relay_ch) + " ,config:" + str(self.config_list))
                sensor_val = MCU.sensors[self.name]
                if(self.config_list['setpoint'] < sensor_val):
                    self.s_print(self.name + " GPIO"+ str(self.relay_ch) + " ON")
                    time.sleep(self.config_list['working'])
                else:
                    self.s_print(self.name + " GPIO"+ str(self.relay_ch) + " OFF")
                
                time.sleep(self.config_list['detecting'])
             
    
    def stop(self):
        self.running = False

    def isRunning(self):
        return self.running
    
    def __del__(self):
        self.stop()
    
    def s_print(self,s):
        Auto.lock.acquire()
        print(s)
        Auto.lock.release()        
        

class EC(Auto):
    def __init__(self,name,relay_ch):
        Auto.__init__(self,name,relay_ch)
        self.config_list = Config.detecting_list['ec']
    

class pH(Auto):
    def __init__(self,name,relay_ch):
        Auto.__init__(self,name,relay_ch)
        self.config_list = Config.detecting_list['ph']
    

class CO2(Auto):
    def __init__(self,name,relay_ch):
        Auto.__init__(self,name,relay_ch)
        self.config_list = Config.detecting_list['co2']

class Timer(Auto):
    def __init__(self,name,relay_ch):
        Auto.__init__(self,name,relay_ch)
       
    def run(self):
        while(self.running):
            self.timer_list = Config.timer_list[self.name]
            # self.s_print(self.name + " " +  str(self.timer_list) + " relay" + str(self.relay_ch))
            current_time = datetime.datetime.now()
            hour = current_time.hour
            minute = current_time.minute

            current_time_val = hour*100 + minute
            flag = False
            for timer in self.timer_list:
                if(current_time_val >= timer['start'] and current_time_val <= timer['end']):
                    # self.s_print(self.name + " GPIO"+ str(self.relay_ch) + " ON")
                    flag = True
            if(not flag):
                # self.s_print(self.name + " GPIO"+ str(self.relay_ch) + " OFF")
                pass
                
            time.sleep(1)