import sys
sys.path.insert(0, './service/')
from mcu import MCU
from detecting import Detecting
from config import Config
from log import Log
from firebase import Firebase
import webserver
from datalogger import DataLogger


class main():
    def __init__(self):
        self.config = Config()
        self.mcu = MCU()
        self.detecting = Detecting()
        # fb = Firebase()
        ws = webserver.WebServer()
        dl = DataLogger()
        