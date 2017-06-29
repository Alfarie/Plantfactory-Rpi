from auto import *
import  time

class Detecting():
    def __init__(self):
        ec = EC("ec",1)
        ph = pH("ph",2)
        co2 = CO2("co2",3)
        
        fan = Timer("fan",4)
        pump = Timer("pump",5)
        led = Timer("led",6)

        ec.start()
        ph.start()
        co2.start()

        fan.start()
        pump.start()
        led.start()