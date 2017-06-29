from pymongo import MongoClient
from datetime import datetime
class Log():
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017')
        self.db = self.client['plantfactory']
        self.logger = self.db.log
    def log(self,val):
        # ** tpye(val) == dict
        if( type(val) is dict):
            val['datetime'] = str(datetime.now())
            self.logger.insert_one(val)
        else:
            logger_data = {"datetime": str(datetime.now()), "type": "Error", "message": "object type of logger info is not dictionary" }
            self.logger.insert_one(logger_data)