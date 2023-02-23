import os
import json
import time
import requests
from datetime import datetime
import PCF8591 as ADC
import RPi.GPIO as GPIO

ACCESS_TOKEN = 'vPbFf01UBJbr47zSRPkK'
url='https://thingsboard.cloud/api/v1/' + ACCESS_TOKEN + '/telemetry'  			    #host name

ds18b20 = ''
DO = 17
GPIO.setmode(GPIO.BCM)
	

def setup():
	global ds18b20
	for i in os.listdir('/sys/bus/w1/devices'):
		if i != 'w1_bus_master1':
			ds18b20 = '28-0516737c45ff'
	ADC.setup(0x48)
	GPIO.setup(DO, GPIO.IN)

def read_temperature():
#       global ds18b20
    location = '/sys/bus/w1/devices/' + ds18b20 + '/w1_slave'
    tfile = open(location)
    text = tfile.read()
    tfile.close()
    secondline = text.split("\n")[1]
    temperaturedata = secondline.split(" ")[9]
    temperature = float(temperaturedata[2:])
    temperature = temperature / 1000
    return temperature

def loop():
    while True:
        if read_temperature() != None:
            R = (ADC.read(0)*5/256)/5
            light = (1/(R))
            payload = {'home_temperature': read_temperature(), 'light' : light}
            requests.post(url, json=payload)
            time.sleep(5)
	
                         

def destroy():
    pass
       

if __name__ == '__main__':
    try:
        setup()
        loop()  
    except KeyboardInterrupt:
        destroy()   
			       
