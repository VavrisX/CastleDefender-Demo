var frameWidth = 39.47;
var frameHeight = 61;
var tFrame = 14; // total frames
var cFrame = 0; // the current frame it is on
var mySprite; // name of my image holder
var pause = false;

var speed=Math.floor((Math.random()*6)+2); //speed of the units, different each playthrough

//stage 1 variables
var fighterLoc=-300;
var fighterLoc1=-450;
var fighterLoc2=-400;
var fighterLoc3=-550;
var fighterLoc4=-650;
//stage 2 variables
var stage2alert=true;
var fighterLoc5=-900;
var fighterLoc6=-350;
var fighterLoc7=-100;
var fighterLoc8=-150;
var fighterLoc9=-250;
var fighterLoc10=-300;
var fighterLoc11=-350;
var fighterLoc12=-400;
var fighterLoc13=-450;
var fighterLoc14=-550;
var fighterLoc15=-600;
var fighterLoc16=-650;
var fighterLoc17=-700;
var fighterLoc18=-750;
var fighterLoc19=-800;
//stage 3 variables
var stage3alert=true;
var fighterLoc20=-1300;
var fighterLoc21=-1350;
var fighterLoc22=-1400;
var fighterLoc23=-1450;
var fighterLoc24=-1550;
var fighterLoc25=-1600;
var fighterLoc26=-1650;
var fighterLoc27=-1700;
var fighterLoc28=-1750;
var fighterLoc29=-1800;
var fighterLoc30=-1250;
var fighterLoc31=-1200;
var fighterLoc32=-1100;
var fighterLoc33=-1150;
var fighterLoc34=-1050;
var fighterLoc35=-1000;
var fighterLoc36=-950;
var fighterLoc37=-900;
var fighterLoc38=-855;
var fighterLoc39=-759;
var fighterLoc40=-800;
var fighterLoc41=-700;
var fighterLoc42=-650;
var fighterLoc43=-600;
var fighterLoc44=-550;
var fighterLoc45=-500;
var fighterLoc46=-450;
var fighterLoc47=-400;
var fighterLoc48=-350;
var fighterLoc49=-300;

//other variables
var castleLife=1000;
var arrowX=-300;
var arrowY=300;
var arrowCount=0;
var deathCount=0;
var stage1=false;
var stage2=false;
var stage3=false;
var stage4=false;
var pauseCheck=1;
var castleY=98;

//life variables, stores data to know if the unit is alive or dead
var fighterLife=true;
var fighterLife1=true;
var fighterLife2=true;
var fighterLife3=true;
var fighterLife4=true;
var fighterLife5=true;
var fighterLife6=true;
var fighterLife7=true;
var fighterLife8=true;
var fighterLife9=true;
var fighterLife10=true;
var fighterLife11=true;
var fighterLife12=true;
var fighterLife13=true;
var fighterLife14=true;
var fighterLife15=true;
var fighterLife16=true;
var fighterLife17=true;
var fighterLife18=true;
var fighterLife19=true;
var fighterLife20=true;
var fighterLife21=true;
var fighterLife22=true;
var fighterLife23=true;
var fighterLife24=true;
var fighterLife25=true;
var fighterLife26=true;
var fighterLife27=true;
var fighterLife28=true;
var fighterLife29=true;
var fighterLife30=true;
var fighterLife31=true;
var fighterLife32=true;
var fighterLife33=true;
var fighterLife34=true;
var fighterLife35=true;
var fighterLife36=true;
var fighterLife37=true;
var fighterLife38=true;
var fighterLife39=true;
var fighterLife40=true;
var fighterLife41=true;
var fighterLife42=true;
var fighterLife43=true;
var fighterLife44=true;
var fighterLife45=true;
var fighterLife46=true;
var fighterLife47=true;
var fighterLife48=true;
var fighterLife49=true;

 window.onload = function() {
 // load canvas and graphic content
 canvas = document.getElementById("myCanvas");
 gc = canvas.getContext("2d");
//Event listeners
 document.addEventListener("click",mouseClickHandler,false);
 document.addEventListener("keydown", keyDownHandler, false);  
 document.addEventListener("keyup", keyUpHandler, false);    
 window.setInterval(render,35);
 window.setInterval(arrowDownRender,16);

     
 //Loading images
 background=document.getElementById("background");    
 castle = document.getElementById("castle");
 mySprite = document.getElementById("fighter");
 arrow = document.getElementById("arrow");
  
 swal({   //Sweet alert JS library
  title: "Welcome to Castle Fight Defense!",
  text: ("Click on screen to shoot enemies with arrows! press Spacebar to PAUSE the game"),
  type: "info",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "lets begin!",
  closeOnConfirm: true
},
function(isConfirm){
  stage1=true;
});    
 }
 //Event handlers
 function keyDownHandler(e) {      //function that stops the game upon pressing space     
 if (e.keyCode == 32 && pauseCheck>0) {
 pause = true;
 pauseCheck=pauseCheck*-1;    //Using *-1 to get the double negative into positive and vice versa
 }
 else if(e.keyCode == 32 && pauseCheck<0) {
 pause = false;
 pauseCheck=pauseCheck*-1;    
 }
}

function keyUpHandler(e) {
 if(e.keyCode == 78) {
 location.reload();
 }
}

  function mouseClickHandler(event){
        if(event.target.tagName.localeCompare("canvas") && event.button==0){
           arrowCount=arrowCount+1;
           arrowX=event.clientX;
           arrowY=50;   
        }   
    }

function arrowDown(){ 
if(pause==false){                           //this function makes the arrow fall down
if(arrowY<650){
    arrowY=arrowY+=24;
}
if(arrowY<250){
    arrowY=arrowY-=3;
}
}
}
 function arrowDownRender(){
  if(pause==false){                                  //this function renders the arrow, little faster then render function
  gc.drawImage(arrow, arrowX, arrowY);
 arrowDown();   
 }
 }

 //renders all graphic content
 function render() {
     if(pause==false){
 gc.drawImage(background,0,0); 
 gc.drawImage(castle,800,castleY);
 gc.font="20px Georgia";
 gc.fillText("Castle durability:" + castleLife,950,50);
 gc.fillText("Score:" + deathCount,950,100);
  gc.drawImage(arrow, arrowX, arrowY);
     
 if(castleLife<=0){   //if the castle is destoyed, player loses the game
     castleY=castleY+=5;
     if(castleY>400){
     pause=true;
     
     swal({  //Sweetalert
  title: "YOU LOST!",
  text: "Try again or exit",
  type: "error",
  showCancelButton: true,
  confirmButtonColor: "#006600",
  confirmButtonText: "New Game",
  closeButtonText: "Exit",
  closeButtonColor:'#ff0000', 
  closeOnConfirm: false,
  closeOnCancel: false  
},
function(isConfirm){
  if (isConfirm) { location.reload();
    
  } else {
    location.reload();
  }
}); 
}
}    

 cFrame=(cFrame+1)%tFrame; //loops the frames of the fighters
 //STAGE 1   
 if(stage1==true){if(fighterLife==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife1==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc1, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife2==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc2, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife3==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc3, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife4==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc4, 439,
 frameWidth, frameHeight);    
 }
 
 
   if (arrowX < fighterLoc + frameWidth && // COLISION0
    arrowX +arrow.width > fighterLoc &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc1 + frameWidth && // COLISION1
    arrowX +arrow.width > fighterLoc1 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife1=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc2 + frameWidth && // COLISION2
    arrowX +arrow.width > fighterLoc2 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife2=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc3 + frameWidth && // COLISION3
    arrowX +arrow.width > fighterLoc3 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife3=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc4 + frameWidth && // COLISION4
    arrowX +arrow.width > fighterLoc4 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife4=false;
     deathCount=deathCount+1;     
    } 
     
  //moves fighters on X axes
 if(fighterLoc<=1000 && fighterLife==true){
    fighterLoc=fighterLoc+=speed;}
     
 if(fighterLoc>=1000 && fighterLife==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc1<=1000 && fighterLife1==true){
    fighterLoc1=fighterLoc1+=speed;}
     
 if(fighterLoc1>=1000 && fighterLife1==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc2<=1000 && fighterLife2==true){
    fighterLoc2=fighterLoc2+=speed;}
     
 if(fighterLoc2>=1000 && fighterLife2==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc3<=1000 && fighterLife3==true){
    fighterLoc3=fighterLoc3+=speed;}
     
 if(fighterLoc3>=1000 && fighterLife3==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc4<=1000 && fighterLife4==true){
    fighterLoc4=fighterLoc4+=speed;}
     
 if(fighterLoc4>=1000 && fighterLife4==true){
     castleLife=castleLife-=2;} 
                 }
     
  //STAGE 2   
  if(fighterLife==false && fighterLife1==false && fighterLife3==false && fighterLife4==false &&fighterLife2==false && stage2alert==true && castleY==98){ swal({
  title: "Stage 1 completed!",
  text: "Get ready for stage 2!",
  type: "success",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "go!",
  closeOnConfirm: true
},
function(isConfirm){
  stage2=true;
  stage2alert=false;
  stage1=false;    
  
});}   
  
  if(stage2==true){if(fighterLife5==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc5, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife6==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc6, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife7==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc7, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife8==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc8, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife9==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc9, 439,
 frameWidth, frameHeight);    
 }
  if(fighterLife10==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc10, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife11==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc11, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife12==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc12, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife13==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc13, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife14==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc14, 439,
 frameWidth, frameHeight);    
 }                 
 if(fighterLife15==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc15, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife16==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc16, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife17==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc17, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife18==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc18, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife19==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc19, 439,
 frameWidth, frameHeight);    
 }
                   
   if (arrowX < fighterLoc5 + frameWidth && // COLISION5
    arrowX +arrow.width > fighterLoc5 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife5=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc6 + frameWidth && // COLISION6
    arrowX +arrow.width > fighterLoc6 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife6=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc7 + frameWidth && // COLISION7
    arrowX +arrow.width > fighterLoc7 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife7=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc8 + frameWidth && // COLISION8
    arrowX +arrow.width > fighterLoc8 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife8=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc9 + frameWidth && // COLISION9
    arrowX +arrow.width > fighterLoc9 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife9=false;
     deathCount=deathCount+1;     
    }
       if (arrowX < fighterLoc10 + frameWidth && // COLISION10
    arrowX +arrow.width > fighterLoc10 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife10=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc11 + frameWidth && // COLISION11
    arrowX +arrow.width > fighterLoc11 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife11=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc12 + frameWidth && // COLISION12
    arrowX +arrow.width > fighterLoc12 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife12=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc13 + frameWidth && // COLISION13
    arrowX +arrow.width > fighterLoc13 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife13=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc14 + frameWidth && // COLISION14
    arrowX +arrow.width > fighterLoc14 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife14=false;
     deathCount=deathCount+1;     
    }
       if (arrowX < fighterLoc15 + frameWidth && // COLISION15
    arrowX +arrow.width > fighterLoc15 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife15=false;
     deathCount=deathCount+1;     
    }              
       if (arrowX < fighterLoc16 + frameWidth && // COLISION16
    arrowX +arrow.width > fighterLoc16 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife16=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc17 + frameWidth && // COLISION17
    arrowX +arrow.width > fighterLoc17 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife17=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc18 + frameWidth && // COLISION18
    arrowX +arrow.width > fighterLoc18 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife18=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc19 + frameWidth && // COLISION19
    arrowX +arrow.width > fighterLoc19 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife19=false;
      deathCount=deathCount+1;   
    }  
        //Moves fighters in stage 2 on X axes           
 if(fighterLoc5<=1000 && fighterLife5==true){
    fighterLoc5=fighterLoc5+=speed+1;}
     
 if(fighterLoc5>=1000 && fighterLife5==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc6<=1000 && fighterLife6==true){
    fighterLoc6=fighterLoc6+=speed+1;}
     
 if(fighterLoc6>=1000 && fighterLife6==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc7<=1000 && fighterLife7==true){
    fighterLoc7=fighterLoc7+=speed+1;}
     
 if(fighterLoc7>=1000 && fighterLife7==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc8<=1000 && fighterLife8==true){
    fighterLoc8=fighterLoc8+=speed+1;}
     
 if(fighterLoc8>=1000 && fighterLife8==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc9<=1000 && fighterLife9==true){
    fighterLoc9=fighterLoc9+=speed+1;}
     
 if(fighterLoc9>=1000 && fighterLife9==true){
     castleLife=castleLife-=2;}               
                 
   if(fighterLoc10<=1000 && fighterLife10==true){
    fighterLoc10=fighterLoc10+=speed+1;}
     
 if(fighterLoc10>=1000 && fighterLife10==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc11<=1000 && fighterLife11==true){
    fighterLoc11=fighterLoc11+=speed+1;}
     
 if(fighterLoc11>=1000 && fighterLife11==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc12<=1000 && fighterLife12==true){
    fighterLoc12=fighterLoc12+=speed+1;}
     
 if(fighterLoc12>=1000 && fighterLife12==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc13<=1000 && fighterLife13==true){
    fighterLoc13=fighterLoc13+=speed+1;}
     
 if(fighterLoc13>=1000 && fighterLife13==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc14<=1000 && fighterLife14==true){
    fighterLoc14=fighterLoc14+=speed+1;}
     
 if(fighterLoc14>=1000 && fighterLife14==true){
     castleLife=castleLife-=2;}                
                  
   if(fighterLoc15<=1000 && fighterLife15==true){
    fighterLoc15=fighterLoc15+=speed+1;}
     
 if(fighterLoc15>=1000 && fighterLife15==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc16<=1000 && fighterLife16==true){
    fighterLoc16=fighterLoc16+=speed+1;}
     
 if(fighterLoc16>=1000 && fighterLife16==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc17<=1000 && fighterLife17==true){
    fighterLoc17=fighterLoc17+=speed+1;}
     
 if(fighterLoc17>=1000 && fighterLife17==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc18<=1000 && fighterLife18==true){
    fighterLoc18=fighterLoc18+=speed+1;}
     
 if(fighterLoc18>=1000 && fighterLife18==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc19<=1000 && fighterLife19==true){
    fighterLoc19=fighterLoc19+=speed+1;}
     
 if(fighterLoc19>=1000 && fighterLife19==true){
     castleLife=castleLife-=2;}                
                  }
    //STAGE 3   
  if(fighterLife5==false && fighterLife6==false && fighterLife7==false && fighterLife8==false &&fighterLife9==false && fighterLife10==false && fighterLife11==false && fighterLife12==false && fighterLife13==false &&fighterLife14==false && fighterLife15==false && fighterLife16==false && fighterLife17==false && fighterLife18==false &&fighterLife19==false && stage3alert==true && castleY==98){ swal({
  title: "Stage 2 completed!",
  text: "Get ready FINAL WAVE!",
  type: "success",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "go!",
  closeOnConfirm: true
},
function(isConfirm){
  stage3=true;
  stage3alert=false;
  stage2=false;
});} 
     
if(stage3==true){ if(fighterLife20==true){
    //draws fighters on stage 3
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc20, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife21==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc21, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife22==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc22, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife23==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc23, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife24==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc24, 439,
 frameWidth, frameHeight);    
 }
  if(fighterLife25==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc25, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife26==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc26, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife27==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc27, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife28==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc28, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife29==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc29, 439,
 frameWidth, frameHeight);    
 }                 
 if(fighterLife30==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc30, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife31==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc31, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife32==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc32, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife33==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc33, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife34==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc34, 439,
 frameWidth, frameHeight);    
 }
  if(fighterLife35==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc35, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife36==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc36, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife37==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc37, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife38==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc38, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife39==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc39, 439,
 frameWidth, frameHeight);    
 }
  if(fighterLife40==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc40, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife41==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc41, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife42==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc42, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife43==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc43, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife44==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc44, 439,
 frameWidth, frameHeight);    
 }                 
 if(fighterLife45==true){
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc45, 439,
 frameWidth, frameHeight);
 }
  if(fighterLife46==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc46, 439,
 frameWidth, frameHeight);  
  }
  if(fighterLife47==true){              
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc47, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife48==true){    
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc48, 439,
 frameWidth, frameHeight);
  }
  if(fighterLife49==true){  
 gc.drawImage(mySprite, cFrame * frameWidth, 0, frameWidth,frameHeight, fighterLoc49, 439,
 frameWidth, frameHeight);    
 }   
     
 if (arrowX < fighterLoc20 + frameWidth && // COLISION20
    arrowX +arrow.width > fighterLoc20 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife20=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc21 + frameWidth && // COLISION21
    arrowX +arrow.width > fighterLoc21 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife21=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc22 + frameWidth && // COLISION22
    arrowX +arrow.width > fighterLoc22 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife22=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc23 + frameWidth && // COLISION23
    arrowX +arrow.width > fighterLoc23 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife23=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc24 + frameWidth && // COLISION24
    arrowX +arrow.width > fighterLoc24 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife24=false;
     deathCount=deathCount+1;     
    }
       if (arrowX < fighterLoc25 + frameWidth && // COLISION25
    arrowX +arrow.width > fighterLoc25 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife25=false
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc26 + frameWidth && // COLISION26
    arrowX +arrow.width > fighterLoc26 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife26=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc27 + frameWidth && // COLISION27
    arrowX +arrow.width > fighterLoc27 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife27=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc28 + frameWidth && // COLISION28
    arrowX +arrow.width > fighterLoc28 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife28=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc29 + frameWidth && // COLISION29
    arrowX +arrow.width > fighterLoc29 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife29=false;
     deathCount=deathCount+1;     
    }
       if (arrowX < fighterLoc30 + frameWidth && // COLISION30
    arrowX +arrow.width > fighterLoc30 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife30=false;
     deathCount=deathCount+1;     
    }              
       if (arrowX < fighterLoc31 + frameWidth && // COLISION31
    arrowX +arrow.width > fighterLoc31 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife31=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc32 + frameWidth && // COLISION32
    arrowX +arrow.width > fighterLoc32 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife32=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc33 + frameWidth && // COLISION33
    arrowX +arrow.width > fighterLoc33 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife33=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc34 + frameWidth && // COLISION34
    arrowX +arrow.width > fighterLoc34 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife34=false;
      deathCount=deathCount+1;   
    }      
    if (arrowX < fighterLoc35 + frameWidth && // COLISION35
    arrowX +arrow.width > fighterLoc35 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife35=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc36 + frameWidth && // COLISION36
    arrowX +arrow.width > fighterLoc36 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife36=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc37 + frameWidth && // COLISION37
    arrowX +arrow.width > fighterLoc37 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife37=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc38 + frameWidth && // COLISION38
    arrowX +arrow.width > fighterLoc38 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife38=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc39 + frameWidth && // COLISION39
    arrowX +arrow.width > fighterLoc39 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife39=false;
     deathCount=deathCount+1;     
    }
       if (arrowX < fighterLoc40 + frameWidth && // COLISION40
    arrowX +arrow.width > fighterLoc40 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife40=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc41 + frameWidth && // COLISION41
    arrowX +arrow.width > fighterLoc41 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife41=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc42 + frameWidth && // COLISION42
    arrowX +arrow.width > fighterLoc42 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife42=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc43 + frameWidth && // COLISION43
    arrowX +arrow.width > fighterLoc43 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife43=false;
      deathCount=deathCount+1;   
    }  
     if (arrowX < fighterLoc44 + frameWidth && // COLISION44
    arrowX +arrow.width > fighterLoc44 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife44=false;
     deathCount=deathCount+1;     
    }
       if (arrowX < fighterLoc45 + frameWidth && // COLISION45
    arrowX +arrow.width > fighterLoc45 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife45=false;
     deathCount=deathCount+1;     
    }              
       if (arrowX < fighterLoc46 + frameWidth && // COLISION46
    arrowX +arrow.width > fighterLoc46 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife46=false;
     deathCount=deathCount+1;
    } 
   if (arrowX < fighterLoc47 + frameWidth && // COLISION47
    arrowX +arrow.width > fighterLoc47 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife47=false;
      deathCount=deathCount+1;  
    }
    if (arrowX < fighterLoc48 + frameWidth && // COLISION48
    arrowX +arrow.width > fighterLoc48 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife48=false;
      deathCount=deathCount+1;   
    } 
    if (arrowX < fighterLoc49 + frameWidth && // COLISION49
    arrowX +arrow.width > fighterLoc49 &&
     arrowY < 439+frameHeight &&
     arrow.height + arrowY > 439) {
     fighterLife49=false;
      deathCount=deathCount+1;   
    }
   //moves fighters in stage 3              
if(fighterLoc20<=1000 && fighterLife20==true){
    fighterLoc20=fighterLoc20+=speed+1.2;}
     
 if(fighterLoc20>=1000 && fighterLife20==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc21<=1000 && fighterLife21==true){
    fighterLoc21=fighterLoc21+=speed+1.2;}
     
 if(fighterLoc21>=1000 && fighterLife21==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc22<=1000 && fighterLife22==true){
    fighterLoc22=fighterLoc22+=speed+1.2;}
     
 if(fighterLoc22>=1000 && fighterLife22==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc23<=1000 && fighterLife23==true){
    fighterLoc23=fighterLoc23+=speed+1.2;}
     
 if(fighterLoc23>=1000 && fighterLife23==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc24<=1000 && fighterLife24==true){
    fighterLoc24=fighterLoc24+=speed+1.2;}
     
 if(fighterLoc24>=1000 && fighterLife24==true){
     castleLife=castleLife-=2;}               
                 
   if(fighterLoc25<=1000 && fighterLife25==true){
    fighterLoc25=fighterLoc25+=speed+1.2;}
     
 if(fighterLoc25>=1000 && fighterLife25==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc26<=1000 && fighterLife26==true){
    fighterLoc26=fighterLoc26+=speed+1.2;}
     
 if(fighterLoc26>=1000 && fighterLife26==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc27<=1000 && fighterLife27==true){
    fighterLoc27=fighterLoc27+=speed+1.2;}
     
 if(fighterLoc27>=1000 && fighterLife27==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc28<=1000 && fighterLife28==true){
    fighterLoc28=fighterLoc28+=speed+1.2;}
     
 if(fighterLoc28>=1000 && fighterLife28==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc29<=1000 && fighterLife29==true){
    fighterLoc29=fighterLoc29+=speed+1.2;}
     
 if(fighterLoc29>=1000 && fighterLife29==true){
     castleLife=castleLife-=2;}                
                  
   if(fighterLoc30<=1000 && fighterLife30==true){
    fighterLoc30=fighterLoc30+=speed+1.2;}
     
 if(fighterLoc30>=1000 && fighterLife30==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc31<=1000 && fighterLife31==true){
    fighterLoc31=fighterLoc31+=speed+1.2;}
     
 if(fighterLoc31>=1000 && fighterLife31==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc32<=1000 && fighterLife32==true){
    fighterLoc32=fighterLoc32+=speed+1.2;}
     
 if(fighterLoc32>=1000 && fighterLife32==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc33<=1000 && fighterLife33==true){
    fighterLoc33=fighterLoc33+=speed+1.2;}
     
 if(fighterLoc33>=1000 && fighterLife33==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc34<=1000 && fighterLife34==true){
    fighterLoc34=fighterLoc34+=speed+1.2;}
     
 if(fighterLoc34>=1000 && fighterLife34==true){
     castleLife=castleLife-=2;}
                 
  if(fighterLoc35<=1000 && fighterLife35==true){
    fighterLoc35=fighterLoc35+=speed+1.2;}
     
 if(fighterLoc35>=1000 && fighterLife35==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc36<=1000 && fighterLife36==true){
    fighterLoc36=fighterLoc36+=speed+1.2;}
     
 if(fighterLoc36>=1000 && fighterLife36==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc37<=1000 && fighterLife37==true){
    fighterLoc37=fighterLoc37+=speed+1.2;}
     
 if(fighterLoc37>=1000 && fighterLife37==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc38<=1000 && fighterLife38==true){
    fighterLoc38=fighterLoc38+=speed+1.2;}
     
 if(fighterLoc38>=1000 && fighterLife38==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc39<=1000 && fighterLife39==true){
    fighterLoc39=fighterLoc39+=speed+1.2;}
     
 if(fighterLoc39>=1000 && fighterLife39==true){
     castleLife=castleLife-=2;}               
                 
   if(fighterLoc40<=1000 && fighterLife40==true){
    fighterLoc40=fighterLoc40+=speed+1.2;}
     
 if(fighterLoc40>=1000 && fighterLife40==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc41<=1000 && fighterLife41==true){
    fighterLoc41=fighterLoc41+=speed+1.2;}
     
 if(fighterLoc41>=1000 && fighterLife41==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc42<=1000 && fighterLife42==true){
    fighterLoc42=fighterLoc42+=speed+1.2;}
     
 if(fighterLoc42>=1000 && fighterLife42==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc43<=1000 && fighterLife43==true){
    fighterLoc43=fighterLoc43+=speed+1.2;}
     
 if(fighterLoc43>=1000 && fighterLife43==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc44<=1000 && fighterLife44==true){
    fighterLoc44=fighterLoc44+=speed+1.2;}
     
 if(fighterLoc44>=1000 && fighterLife44==true){
     castleLife=castleLife-=2;}                
                  
   if(fighterLoc45<=1000 && fighterLife45==true){
    fighterLoc45=fighterLoc45+=speed+1.2;}
     
 if(fighterLoc45>=1000 && fighterLife45==true){
     castleLife=castleLife-=2;}
     
 if(fighterLoc46<=1000 && fighterLife46==true){
    fighterLoc46=fighterLoc46+=speed+1.2;}
     
 if(fighterLoc46>=1000 && fighterLife46==true){
     castleLife=castleLife-=2;}   
     
 if(fighterLoc47<=1000 && fighterLife47==true){
    fighterLoc47=fighterLoc47+=speed+1.2;}
     
 if(fighterLoc47>=1000 && fighterLife47==true){
     castleLife=castleLife-=2;}     
 
 if(fighterLoc48<=1000 && fighterLife48==true){
    fighterLoc48=fighterLoc48+=speed+1.2;}
     
 if(fighterLoc48>=1000 && fighterLife48==true){
     castleLife=castleLife-=2;}
     
  if(fighterLoc49<=1000 && fighterLife49==true){
    fighterLoc49=fighterLoc49+=speed+1.2;}
     
 if(fighterLoc49>=1000 && fighterLife49==true){
     castleLife=castleLife-=2;}                
                }
         
         //checks if each fighter in stage 3 died, if so sweet alert pops up
     if(fighterLife20==false && fighterLife21==false && fighterLife22==false && fighterLife23==false &&fighterLife24==false && fighterLife25==false && fighterLife26==false && fighterLife27==false && fighterLife28==false &&fighterLife29==false && fighterLife30==false && fighterLife31==false && fighterLife32==false && fighterLife33==false &&fighterLife34==false &&
     fighterLife35==false && fighterLife36==false && fighterLife37==false && fighterLife38==false &&fighterLife39==false && fighterLife40==false && fighterLife41==false && fighterLife42==false && fighterLife43==false &&fighterLife44==false && fighterLife45==false && fighterLife46==false && fighterLife47==false && fighterLife49==false && castleY==98){ 
         swal({
  title: "YOU WON THE GAME!",
  text: "You are the ultimate Defender!",
  type: "success",
  showCancelButton: true,
  confirmButtonColor: "#006600",
  confirmButtonText: "New Game",
  closeButtonText: "Exit",
  closeButtonColor:'#ff0000', 
  closeOnConfirm: false,
  closeOnCancel: false  
},
function(isConfirm){
  if (isConfirm) { location.reload();
    
  } else {
    location.reload();
  }});        
 }
 }
 }




