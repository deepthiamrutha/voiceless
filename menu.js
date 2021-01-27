class Menu{
    constructor(){
        //this.input = createInput("Name");
        this.start = createSprite(width/2,height/2);
        this.start.addImage(start);
        this.start.scale = 0.7;
        
        //this.title = createElement('h2');

        this.play=createSprite(width/2,height-100);
        this.play.addImage(play);
        this.play.scale = 0.7;
        this.play.visible = false;

    }
    
    display(){ 
        //display title
        //this.title.html("VOICE LESS");
       // this.title.position(width/2 - 50, 0);
            //display start button
            fill("white");
            textSize(18);
        text("Voice Less",width/2-50,20);
        // if cond mousePressedOver { 
        if(mousePressedOver(this.start)){
            gameState= "rules";
        }
        //display rules
       /* if(gameState === "rules"){
            this.start.visible = false;
            fill("white");
            textSize(18);
            text(" The rules are : You can move around with arrow keys. You can click on INSPECT button to explore and progress through the game",200,200); 
            // display play button
            this.start.visible = true;
        

            // if play pressed
            if(mousePressedOver(this.play)){
                gameState= "scene1";
            }
        }*/
        drawSprites();
    }
}
