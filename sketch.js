var forestBg;
var bunny,man,hunter,apartment,forest1,watchman,man_run,manLeft,manRight,room,start,play;
var gameState = "start",trap;
function preload(){
  forestBg = loadImage("CodeFiles/forestmid.jpg");
 // bunny=loadImage("CodeFiles/bunny.gif");
  //start = loadImage("CodeFiles/start.jpg");
 //` play = loadImage("CodeFiles/play.jpg");
}
function setup() {
  createCanvas(800,400);
    man= createSprite (50,380);
    inspect = createSprite(width-10,height-10);
    inspect.visible = false;
    interact = createSprite(width-10,height-10);
    interact.visible = false;
}

function draw() {
  background(forestBg);  
  if(gameState==="start"){
    menu = new Menu();
    menu.display();
  }

  if(gameState==="scene1"){
    //background()
    if(keyDown(RIGHT_ARROW)){
      man.x=man.x+5;
      //man.changeAnimation("rightwalk");
    }
    if(keyDown(LEFT_ARROW)){
      man.x=man.x-5;
      //man.changeAnimation("leftwalk");
    }
    if(keyWentUp(RIGHT_ARROW)){
      //man.changeAnimation("right");
    }
    if(keyWentUp(LEFT_ARROW)){
      //man.changeAnimation("left");
    }
    if(man.x>width-100){
      inspect.visible = true;
      if(mousePressedOver(inspect)){
        //background(forestMid);
        trap = createSprite(width/2,height/2);
        //trap.addImage();
        interact.visible=true;
        if(mousePressedOver(interact)){
            //make the bunny run away
            //display right arrow sprite, if he clicks, change bg to forest right image.
        }
      }
    }
  }
  drawSprites();
}