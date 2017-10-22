import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'monitor',
  template: `<div [ngStyle]="{'background-image': 'url('+land+')', 'background-size': '320 320'}" >
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
             
            `
})

export class Monitor implements OnInit { 
  
  ny=50;
  nx=160;
  shipwidth=0;
  screen=0;
  world='';
  land='';
  xmlns="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 320' width='320' height='320'>";
  blin="<polygon points='60,20 100,40 100,80 60,100 20,80 20,40'/>";
  ende="</svg>";
  head="data:image/svg+xml;base64,";
  //show="display:inline;";
  //hide="display:none;";

  ngOnInit(){
   
    //this.land=this.head+window.btoa(this.xmlns+this.blin+this.ende);
    
  }
  
  renderShip(h,v,f){
                var screen=Math.floor((h-1)/5000);
                var heightInScreen;
               
                heightInScreen=h-screen*5000;
                
       
                if(f==8000){this.nx=160;}
                this.ny=300-(300/5000)*heightInScreen; // 3 different screens per height
                if(h<5000){this.ny=280-(280/5000)*h;}//bug correction
                if(h>0){this.nx+=(300/50000)*v;} // can not move on the ground
                if(this.nx>300){this.nx=20;++this.screen} // endless horizontal plane 
                if(this.nx<20){this.nx=300;--this.screen} // endless horizontal plane              
                this.shipwidth=50;
                if(this.screen>6){this.screen=0;} //just allows 7 screens
                if(this.screen<0){this.screen=6;} // no negative screens

              } 
  
  renderWorld(height,worlddata){
   

   if(height<5000)
    {
     var parsed=JSON.parse(worlddata);
     this.world=parsed.level[this.screen];
     this.land=this.head+window.btoa(this.xmlns+this.world+this.ende);
    }
   if(height>5000)
    {this.land='';} 
  }            
 
}