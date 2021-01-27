var forestBg;
var bunny,man,hunter,apartment,forest1,watchman,rightWalk,leftWalk,manLeft,manRight,forestBg1,voiceless,start,play;
var gameState = "start",trap,scene,inspect,interact,bunnyImg,d2,d3,d4,d5;
var dialogue,arrow1,arrow2,arrow3,arrow4,arrow5,arrow6,trap_img,room_img,forestfootsteps;
function preload(){
  forestBg = loadImage("images/forestmid.jpg");
  bunnyImg=loadImage("images/bunny.gif");
  start = loadImage("images/start.jpg");
  play = loadImage("images/play.jpg");
  forestBg1 = loadImage("images/forest.jpg");
  leftWalk = loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png","images/r5.png","images/r6.png","images/r7.png","images/r8.png","images/r9.png","images/r10.png","images/r11.png","images/r12.png");
  rightWalk=loadAnimation("images/l1.png","images/l2.png","images/l3.png","images/l4.png","images/l5.png","images/l6.png","images/l7.png","images/l8.png","images/l9.png","images/l10.png","images/l11.png","images/l12.png");
  manRight = loadImage("images/l1.png");
  manLeft = loadImage("images/r1.png");
  trap_img=loadImage("images/trap.jpg");
  d1 = loadImage("images/text.png");
 d2 = loadImage("images/text2.png");
 d3 = loadImage("images/text3.png");
 d4 = loadImage("images/text4.png");
 d5=loadImage("images/text5.png");
 room_img=loadImage("images/room.jpg");
 voiceless=loadImage("images/voiceless.jpg");
 forestfootsteps=loadImage("images/forestfoot.png");
 
}
function setup() {
  createCanvas(800,400);
    /*man= createSprite (50,380);
    inspect = createSprite(width-10,height-10);
    inspect.visible = false;
    interact = createSprite(width-10,height-10);
    interact.visible = false;*/
    menu = new Menu();
    scene = new Scene();
}

function draw() {
  background(voiceless); 
  console.log(gameState); 
  if(gameState==="start"){
    menu.display();
  }

  if(gameState === "rules"){
    menu.start.destroy();
    fill("white");
    textSize(18);
    text(" The rules are : ",200,50);
    text("You can move around with arrow keys. ",200,70);
    text("You can click on INTERACT button to explore and progress through the game",200,90);
    // display play button
    menu.play.visible = true;

  
    // if play pressed
    if(mousePressedOver(menu.play)){
        gameState= "scene1";
    }
  }
    if(gameState==="scene1"){
      background(forestBg1);
      menu.play.destroy();
      scene.displayScene1();
      
      }

    if(gameState==="scene2"){
      background(forestBg);
      scene.displayScene2();
        
    }
    if(gameState==="scene3"){
     
        background(forestfootsteps);
        scene.displayScene3();
          
    }
    if(gameState==="scene4"){
      background(forestBg);
      scene.displayScene4();
     }
    
     if(gameState==="scene5"){
      background(forestBg);
      scene.displayScene5();
    }
    if(gameState==="scene6"){
      background(forestBg);
      scene.displayScene6();
    }
    text(mouseX+","+mouseY,mouseX,mouseY);
      drawSprites();
    }

  
  
