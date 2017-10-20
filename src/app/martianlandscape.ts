
export function martianlandscape(screens,pixelSize){
 var landingSite=Math.floor(Math.random()*screens);
 var Screen=[];
 var curScreen;
 
 for(curScreen=0;curScreen<screens;++curScreen)   
  {if(curScreen!=landingSite)
    {var landType=Math.floor(Math.random()*4);
     
     console.log("landType "+landType);
     
     switch(landType){case 0:
                           var hill0=makeMountain('small',pixelSize,0);
                           var hill1=makeMountain('small',pixelSize,1);
                           var hill2=makeMountain('small',pixelSize,2);
                           Screen.push(hill0+hill1+hill2);
                           console.log("case 0 "+hill0+hill1+hill2);
                           break;
                      case 1: 
                           var flat1=makeFlatLand('brown','small',pixelSize,1); 
                           var hill0=makeMountain('small',pixelSize,0);
                           var hill2=makeMountain('small',pixelSize,2);  
                           Screen.push(hill0+flat1+hill2);
                           console.log("case 1 "+hill0+flat1+hill2); 
                           break;
                      case 2:
                           var moun0=makeMountain('medium',pixelSize,0);
                           var moun1=makeMountain('medium',pixelSize,1);        
                           Screen.push(moun0+moun1);
                            console.log("case 2 "+moun0+moun1);
                           break;
                      case 3:
                           var hmoun=makeMountain('large',pixelSize,0);     
                           Screen.push(hmoun);
                           console.log("case 3 "+hmoun);
                           break; 
                     } 
      
    }
   else
    {var flat1=makeFlatLand('green','small',pixelSize,1); 
     var hill0=makeMountain('small',pixelSize,0);
     var hill2=makeMountain('small',pixelSize,2);  
     Screen.push(hill0+flat1+hill2);
    }
  }
  
 var wholeJSON={"level": Screen, "landing": landingSite+1 };
  
 return JSON.stringify(wholeJSON); 
}

function makeMountain(size,screenSize,offset)
 {var curSize;
  var x,y,p1x,p2x,p1y,p2y;
  var plusY;
  var of=0;
 
  console.log("executing makeMountain");
  switch(size){
   case 'small':
    curSize=screenSize/3;
    plusY=screenSize/2;
    of=curSize*offset; 
    break; 
   case 'medium':
    curSize=screenSize/2.3;
    plusY=screenSize/2;
    of=curSize*offset;
    break;  
   case 'large':
    curSize=screenSize;
    plusY=screenSize/4;
    of=curSize*offset;
    break;  
  }
  x=Math.round(curSize/2);
  curSize=Math.round(curSize);
  p1x=Math.round(of+Math.random()*x);
  p1y=(Math.round(Math.random()*curSize))%160+plusY;
  p2x=p1x+Math.round(Math.random()*x);
  p2y=(Math.round(Math.random()*curSize))%160+plusY;  
   
  
  var code="<path stroke='none' fill='brown' d='M "+of+" 300 L "+p1x+" "+p1y+" L "+p2x+" "+p2y+" L "+(curSize+of)+" 300' />";
  console.log(code);
  return code;
 }

function makeFlatLand(color,size,screenSize,offset)
 {var curSize;
  //var x,y,p1x,p2x,p1y,p2y;
  var plusY=160;
  var of=0;

  console.log("executing makeFlatLand");
  switch(size){
  case 'small': curSize=screenSize/3;
                plusY=screenSize/2;
                of=curSize*offset;
                break;
   case 'medium':
                 curSize=screenSize/2;
                 plusY=screenSize/2;
                 of=curSize*offset;
                 break;  
   case 'large':
                curSize=screenSize;
                plusY=screenSize/2;
                of=curSize*offset;   
    break;
  }

  var code="<path stroke-width='5' stroke='"+color+"' d='M "+of+" 300 L "+(curSize+of)+" 300' />";
  console.log(code);
  return code;
 } 