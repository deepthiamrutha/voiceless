class Menu{
    constructor(){
        //this.input = createInput("Name");
        this.button = createSprite(displayWidth/2 + 10, displayHeight/2);
        this.button.addImage(start);
        this.title = createElement('h2');
        this.button1=createSprite(displayWidth/2 + 30, displayHeight/2);
        this.button1.addImage(play);
    }
    hide(){
        this.button.hide();
        //this.input.hide();
        this.title.hide();
        this.button1.hide();
      }
    display(){ 
     //display title
    this.title.html("VOICE LESS");
    this.title.position(displayWidth/2 - 50, 0);
        //display start button
        
      // if cond mousePressedOver { 
       if(mousePressedOver(this.button)){
           //display rules
text(" The rules are : You can move around with arrow keys. You can click on INSPECT button to explore and progress through the game",200,200); 
// display play button

// if play pressed
    if(mousePressedOver(this.button1)){
    gameState= "scene1";
    }
       }
    }
}