import psutil
import urllib2
import re
import mysql.connector as conn
import MySQLdb
import sys
import logging

sys.tracebacklimit = 0

class GetData:

	@staticmethod	
	def splitData(data):
		return re.split("[ ,='\()]+" ,data)
	
	@staticmethod	
	def getMemory():
		data = GetData.splitData(str(psutil.virtual_memory()))
		return GetData.requiredData(data)
		
	@staticmethod	
	def getStorage():
		data = GetData.splitData(str(psutil.disk_usage('/')))
		return GetData.requiredData(data)
		
	@staticmethod	
	def checkNetwork():
		#psutil.net_if_stats()
		try:
			urllib2.urlopen('https://www.google.com', timeout = 2)
			return True
		except urllib2.URLError as err:
			return False
	
	@classmethod
	def requiredData(cls, data):
		cls.data = []
		for i in range(len(data)):
			if data[i] == 'free' or data[i] == 'used' or data[i] == 'total':
				cls.data.append(data[i+1])
		return cls.data

	@staticmethod
	def connectDB():
		#print "i am here"
		db = conn.connect(host='localhost', user='root', passwd='root', db='sysMonitor')
		#print db
		cursor = db.cursor()
		#print cursor
		return db,cursor

	@staticmethod
	def insertMData(data):
		db,cursor = GetData.connectDB()
		try:
			affectedConn = cursor.execute("insert into Memory(available, used, free) values(%s, %s, %s);", data)
			db.commit()
			logging.warn("%s", affectedConn)
			logging.info("inserted the values")
		except MySQLdb.IntegrityError:
			logging.warn("did not work")
		finally:
			db.close()
		return data

	@staticmethod
	def insertSData(data):
		db,cursor = GetData.connectDB()
		try:
			affectedConn = cursor.execute("insert into Memory(available, used, free) values(%s, %s, %s);", data)
			db.commit()
			logging.warn("%s", affectedConn)
			logging.info("inserted the values")
		except MySQLdb.IntegrityError:
			logging.warn("did not work")
		finally:
			db.close()
		return data

	@staticmethod
	def insertNData(data):
		db,cursor = GetData.connectDB()
		sql_Query = "INSERT INTO Network(status) Values({});".format(data)
		try:
			affectedConn = cursor.execute(sql_Query)
			db.commit()
			logging.warn("%s", affectedConn)
			logging.info("inserted the values")
		except MySQLdb.IntegrityError:
			logging.warn("did not work")
		finally:
			db.close()
		return data


memData = GetData.getMemory()
storeData = GetData.getStorage()
netStat =GetData.checkNetwork()

GetData.insertNData(netStat)
GetData.insertSData(storeData)
GetData.insertMData(memData)


