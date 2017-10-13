
import { Component, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'controlpanel',
  template: `<div>
             <h3>control panel</h3>
             <p><strong>height</strong>&nbsp;{{height}}</p>
             <p><strong>speed</strong>&nbsp;{{speed}}</p>
             <p><strong>fuel</strong>&nbsp;{{fuel}}</p> 
             <p><strong>thrust</strong>&nbsp;{{thrust}}</p>
             <p><strong>&Delta;v</strong>&nbsp;{{deltaV}}</p>
             <p><strong>angle</strong>&nbsp;{{angle}}</p>            
             <p>&nbsp;</p>
             <p><button (click)="onThrustPlusPlus()">++</button><button (click)="onThrustPlus()">+</button>thrust
                <button (click)="onThrustMinus()">-</button><button (click)="onThrustOff()">off</button></p>
             <p><button (click)="onPlusAngle()">+</button>angle<button (click)="onPlusMinus()">-</button></p>
             </div>
             
            `
  
})


export class Controlpanel{

 height=0;
 speed=0;
 fuel=0;
 angle=0;
 thrust=0;
 deltaV=0;


 onThrustPlusPlus(){
  this.thrust+=12.5;
  if(this.thrust>100){this.thrust=100;} 

 }

 onThrustPlus(){
  ++this.thrust;
  if(this.thrust>100){this.thrust=100;} 
 }

 onThrustMinus(){
  --this.thrust;
  if(this.thrust<0){this.thrust=0;}
 }

 onThrustOff(){
  this.thrust=0;
 }
 
 onPlusAngle(){
  this.angle+=0.1;
  if(this.angle>1){this.angle=1;}
  this.angle=Math.round(this.angle*10)/10;
 }

 onPlusMinus(){
  this.angle-=0.1;
  if(this.angle<-1){this.angle=-1;}
  this.angle=Math.round(this.angle*10)/10;
 }

 
 startIt(){

  this.height=15000;
  this.speed=0;
  this.fuel=8000;
  this.thrust=0;
  this.angle=0;


  
  setInterval( () => {var spacecraftMass=16000;
                      var xVelocity=3200;
                      var marsG=0.32;
                      var fuelConsumption=(this.thrust/100)*8;
                      var curFuel=this.fuel-fuelConsumption;
                      var curMass=curFuel+spacecraftMass;
                      var deltaV=xVelocity*fuelConsumption/curMass;
                      var curSpeed=this.speed+marsG-deltaV*(1-this.angle);
   
                      if(this.height>0)
                       {this.speed=Math.round(curSpeed*100)/100;
                        this.fuel=Math.round((this.fuel-fuelConsumption)*100)/100;
                        if(this.fuel<0){this.fuel=0;}
                        this.height=Math.round((this.height-this.speed)*100)/100;
                        if(this.height<0){this.height=0;}
                        if(this.fuel>0){this.deltaV=Math.round(deltaV*10000)/10000;} 
                       } 
    
                     } , 100 );
 }

 getValues(){
  var h=this.height;
  var a=this.angle;
  var d=this.deltaV;
  var f=this.fuel;  
  
  return {height: h, angle: a, deltaV: d, fuel: f};
 }
}

