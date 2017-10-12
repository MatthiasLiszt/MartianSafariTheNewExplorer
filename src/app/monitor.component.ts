import { Component } from '@angular/core';

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
             <rect fill="url(#ufo)" [attr.width]="shipwidth" height="50" x="50" [attr.y]="ny"/> 
             </svg> 
             </div>  
             <p style="display:none">{{xxx}}</p>
            `
})

export class Monitor{
  xxx=0;
  ny=50;
  shipwidth=0;
  //let blink=true;
  
  renderShip(x){
                this.xxx=x;
                this.ny=300-(300/15000)*x; 
                this.shipwidth=50;

              } 
 
}