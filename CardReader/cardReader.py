#current working code
from datetime import datetime
from timeit import default_timer as timer
import time as time
import pendulum
import json
import pandas as pd
from prettytable import PrettyTable
import pymongo
from pymongo import MongoClient

data = []

def getData():
    userID = input("Please tap your card: ")
    time_pass = []
    
    while True:
        wait_time = []
        d1 = timer()
        input()
        d2 = timer()
        delta = d2 - d1
        dsec = delta
        time_pass.append((dsec)) 
        updateDB()
        idTime = ((data, time_pass))

        print(idTime)
        if dsec < 60000:
            continue
        #gives swipes over time greater than 60 s not exactly per minute but close? 
        else:
            count = [len(time_pass)]
            average = (len(time_pass) / sum(time_pass)) * 60 
            time_pass.remove(dsec)
            time_pass.clear() 
            wait_time.append(average)
            
            print("Number of Swipes: ")
            print(count)
            print("Average swipes per min: ")
            print(wait_time)
            print("Estimated wait time: ")
            
            json_count = json.dumps(count)
            json_wait = json.dumps(wait_time)
            
            title = ["Number of Swipes", "Average Swipes per Minute"]
            t = PrettyTable(title)
            t.add_row([count[0], wait_time[0]])
            print(t)
            
            time.sleep(0.0000001) 

def updateDB():
    cluster = MongoClient("mongodb+srv://arthursung98:wasp0810@reactproject.q4zeq.mongodb.net/21Hackathon?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE")
    db = cluster["21Hackathon"]
    collection = db["waitlines"]

    filter = {'location' : "Commons"} 
    curLineNum = collection.find_one(filter)["linenum"]
    newvalue = { "$set" : {'linenum' : curLineNum + 1}}
    collection.update_one(filter, newvalue)
             
# getData()  
getData()
          
#We need a model that predicts dining hall wait times. We can probably estimate it for now and tweak it when we
#get real data

#Adjust scan time to scans/min to people served/min. With EBI in mind, there are probably 5-6 people in front of you after
#the scanner. Use this to make estimated wait time.