
int heartbeatSensor = A0;
int tempSensor = A1;
float voltage, temperature;
int beat;

void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
}

void loop() {
  //temperature
 voltage = (analogRead(tempSensor)*5.0)/1024;
 temperature = voltage*100;

//heartbeat 
beat = analogRead(heartbeatSensor);
Serial.print("t");
Serial.println(temperature);
Serial.print("b");
Serial.println(beat);

delay(1000);
}
