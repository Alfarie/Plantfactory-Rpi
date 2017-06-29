from pymongo import MongoClient
class Config():
    working_list = {}
    detecting_list = {}
    timer_list = {}
    auto_mode = False
    objid = {
        'detecting': 0,
        'timer': 0
    }
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017')
        self.db = self.client['plantfactory']
        self.config = self.db.config

        
        conf = self.config.find()
        if( conf.count() <= 0):
            self.init_config()
        else:
            doc = self.config.find({ 'detecting_list': {"$exists":True}  })[0]
            dt_list = doc['detecting_list']
            Config.detecting_list = dt_list
            Config.objid['detecting'] = doc['_id']

            doc = self.config.find({ 'timer_list': {"$exists":True}  })[0]
            tm_list = doc['timer_list']
            Config.timer_list = tm_list
            Config.objid['timer'] = doc['_id']

            doc = self.config.find({ 'working_list': {"$exists":True}  })[0]
            wk_list = doc['working_list']
            Config.working_list = tm_list

    def init_config(self):
        Config.detecting_list['ec'] = {'setpoint': 1.0, 'working': 3, 'detecting': 6, 'enable': True}
        Config.detecting_list['ph'] = {'setpoint': 7.0, 'working': 3, 'detecting': 6, 'enable': False}
        Config.detecting_list['co2'] = {'setpoint': 1000, 'working': 10, 'detecting': 60, 'enable': True}

        Config.timer_list['fan'] = []
        Config.timer_list['pump'] = []
        Config.timer_list['led'] = []

        Config.timer_list['fan'].append({'start': 100, 'end':200})
        Config.timer_list['fan'].append({'start': 230, 'end':330})
        Config.timer_list['fan'].append({'start': 430, 'end':530})
        Config.timer_list['fan'].append({'start': 600, 'end':700})

        Config.timer_list['pump'].append({'start': 100, 'end':200})
        Config.timer_list['pump'].append({'start': 230, 'end':330})
        Config.timer_list['pump'].append({'start': 430, 'end':530})

        Config.timer_list['led'].append({'start': 100, 'end':200})
        Config.timer_list['led'].append({'start': 230, 'end':330})
        Config.timer_list['led'].append({'start': 430, 'end':530})

        Config.working_list = {
            "ec": False,
            "ph": False,
            "co2": False,
            "pump": False,
            "fan": False,
            "led": False
        }
       
        self.config.insert_one({"working_list": Config.working_list})
        self.config.insert_one({"detecting_list": Config.detecting_list})
        self.config.insert_one({"timer_list": Config.timer_list})

    @staticmethod
    def UpdateConfig():
        client = MongoClient('mongodb://localhost:27017')
        db = client['plantfactory']
        config = db.config
        config.delete_many({})
        config.insert_one({"working_list": Config.working_list})
        config.insert_one({"detecting_list": Config.detecting_list})
        config.insert_one({"timer_list": Config.timer_list})