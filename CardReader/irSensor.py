import logging
import re
import pymongo
from pymongo import MongoClient

def getSensorInput():
	file1 = open(r'C:\\Github Repos\\21_Hackathon\\CardReader\\putty.log')
	lines = file1.read().splitlines()
	oldLength = len(lines)
	newLength = 0
	
	while True:
		file2 = open(r'C:\\Github Repos\\21_Hackathon\\CardReader\\putty.log')
		newLines = file2.read().splitlines()
		newLength = len(newLines)

		if newLength != oldLength :
			updateDB()
			oldLength = newLength
			print(newLength)

def updateDB():
  cluster = MongoClient("mongodb+srv://arthursung98:wasp0810@reactproject.q4zeq.mongodb.net/21Hackathon?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE")
  db = cluster["21Hackathon"]
  collection = db["waitlines"]

  filter = {'location' : "Commons"} 
  curLineNum = collection.find_one(filter)["linenum"]
  newvalue = { "$set" : {'linenum' : curLineNum + 1}}
  collection.update_one(filter, newvalue)
	
getSensorInput()