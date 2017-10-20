import { Component } from '@angular/core';
import {martianlandscape} from './martianlandscape';

@Component({
  selector: 'monitor',
  template: `<div>
             <svg viewBox="0 0 320 320">
             <defs>
             <pattern id="ufo" x="0" y="0" width="52" height="52">
              <ellipse cx="26" cy="26" rx="23" ry="14" stroke="none" stroke-width="3" fill="orange" />
              <circle cx="17" cy="26" r="3.5" fill="green" />
              <circle cx="27" cy="26" r="3.5" fill="blue" />
              <circle cx="37" cy="26" r="3.5" fill="red" />
             </pattern>
             </defs>
             <rect fill="url(#ufo)" [attr.width]="shipwidth" height="50" [attr.x]="nx" [attr.y]="ny"/> 
             </svg> 
             </div>  
             <div style="display:none;">{{xxx}}</div>
            `
})

export class Monitor{ 
  xxx=0;
  ny=50;
  nx=160;
  shipwidth=0;
  //let blink=true;
  
  renderShip(h,v,f){
                var screen=Math.floor((h-1)/5000);
                var heightInScreen;
               
                heightInScreen=h-screen*5000;
                this.xxx=heightInScreen; 
       
                if(f==8000){this.nx=160;}
                this.ny=300-(300/5000)*heightInScreen; // 3 different screens per height
                if(h<5000){this.ny=280-(280/5000)*h;}//bug correction
                if(h>0){this.nx+=(300/50000)*v;} // can not move on the ground
                if(this.nx>300){this.nx=20;} // endless horizontal plane 
                if(this.nx<20){this.nx=300;} // endless horizontal plane              
                this.shipwidth=50;

              } 
  
  renderWorld(height,screen){
   let world=martianlandscape(7,320);
  }            
 
}