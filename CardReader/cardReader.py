#current working code
from datetime import datetime
from timeit import default_timer as timer
import time as time
import pendulum
import json
import pandas as pd
from prettytable import PrettyTable 

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
        idTime = ((data, time_pass))

        print(idTime)
        if dsec < 5:
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
             
            
            
            
getData()       
           

    
#We need a model that predicts dining hall wait times. We can probably estimate it for now and tweak it when we
#get real data

#Adjust scan time to scans/min to people served/min. With EBI in mind, there are probably 5-6 people in front of you after
#the scanner. Use this to make estimated wait time.