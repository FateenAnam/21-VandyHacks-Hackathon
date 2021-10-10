
#include <ArduinoJson.h>

int count =0;
int state =0;
  
void setup() {
  pinMode(7,INPUT);
  Serial.begin(9600);
  pinMode(13,OUTPUT);
}
void loop() {

if(digitalRead(7)==0 & state==0)
{
  
  digitalWrite(13,HIGH);
  count++;
  Serial.println(count);
  state=1;

  //DynamicJsonDocument doc(1024); 
  //JsonObject root = doc.as<JsonObject>();
  //doc["counter"] = count;

  //serializeJson(doc,Serial);
  //Serial.println();
  }
  
 else if(digitalRead(7)!=0){
    digitalWrite(13,LOW);
    state = 0;
    }
//Serial.println();
delay(100);
}
