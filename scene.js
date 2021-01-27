class Scene{
    constructor(){
        man= createSprite (170,250);
        man.addAnimation("right",rightWalk);
        man.addAnimation("left",leftWalk);
        man.addAnimation("L",manLeft);
        man.addAnimation("R",manRight);
        man.visible = false;
      
        interact = createSprite(width/2,height-30);
        interact.visible = false;
        bunny = createSprite(width/2-70,height/2);
        bunny.addImage(bunnyImg);
        bunny.scale = 0.12;
        bunny.visible = false;
        dialogue = createSprite(width/2,height - 60);
        dialogue.addImage(d1);
        //dialogue1.addImage("2",d2);
        dialogue.visible = false;
        trap = createSprite(width/2,height/2);
      trap.addImage(trap_img);
      trap.scale= 0.17;
      trap.visible=false;
        arrow1 = createSprite (width-20,height/2);
        arrow1.visible = false;
        
      
        
    }
    displayScene1(){
      man.visible = true;
        if(keyDown(RIGHT_ARROW)){
          man.x=man.x+5;
          man.changeAnimation("right");
          }
          if(keyDown(LEFT_ARROW)){
            man.x=man.x-5;
            man.changeAnimation("left");
          }
          if(keyWentUp(RIGHT_ARROW)){
            man.changeAnimation("R");
          }
          if(keyWentUp(LEFT_ARROW)){
            man.changeAnimation("L");
          }
          if(man.x>width-100){
            interact.visible=true;
            if(mousePressedOver(interact)){
              gameState = "scene2";
             
            }
            
        }
        drawSprites();
    }
    displayScene2(){
      man.visible = false;
      bunny.visible = true;
      trap.visible=true;
      bunny.velocityX = -10;
      bunny.lifetime = 100;
   
     
      if(mousePressedOver(interact)){
          //display right arrow sprite, if he clicks, change bg to forest right image.
          dialogue.visible = true;
          interact.visible=false;
          arrow1.visible = true;
      }
      if(mousePressedOver(arrow1)){
        gameState = "scene3";
       
      }
    }

    displayScene3(){
      trap.visible=false;
     
     
      arrow1.visible = false;
      interact.visible=true;

      if(mousePressedOver(interact)){
        //display dialogue, to follow footsteps
        dialogue.visible=true;
        dialogue.addImage(d2);
        interact.visible=false;
        arrow2 = createSprite (width-20,height/2);
        
      }
      if(mousePressedOver(arrow2)){
        gameState = "scene4";
      }
    }
     
    displayScene4(){
        interact.visible=true;
        arrow2.destroy();
        if(mousePressedOver(interact)){
          //display dialogue, 
          dialogue.visible=true;
          interact.visible=false;
          dialogue.addImage(d3);
          arrow3 = createSprite (width-20,height/2);
          
        }
        if(mousePressedOver(arrow3)){
          gameState = "scene5";
        }
      }
    
    displayScene5(){
          interact.visible=true;
          arrow3.destroy();
          if(mousePressedOver()){
            //display dialogue,
            dialogue.visible=true;
            interact.visible=false;
            dialogue.addImage(d4);
            arrow4 = createSprite (width-20,height/2);

          }
          if(mousePressedOver(arrow4)){
            gameState = "scene6";
          }
    }
    
    displayScene6(){
      interact.visible=true;
      arrow4.destroy();
      if(mousePressedOver(interact)){
        dialogue.visible=true;
        interact.visible=false;
        dialogue.addImage(d5);
        arrow5 = createSprite (width-20,height/2);
      }
    if(mousePressedOver(arrow5)){
      gameState = "scene7";
    }
  }
}  


