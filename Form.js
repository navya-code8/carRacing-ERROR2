class Form{

    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Start Game");
        this.greeting = createElement("h3")


    }

    hideElement(){

        this.button.hide()
        this.input.hide()
        this.greeting.hide()

    }

    display(){

     var title = createElement("h1");
     title.html("Car Racing Game");
     title.position(displayWidth/2-60, displayHeight/2-60);

     this.input.position(displayWidth/2-30, displayHeight/2);
     this.button.position(displayWidth/2, displayHeight/2+40);
    // console.log(input.value())
     
     this.button.mousePressed(function(){
        console.log(this.button)
        this.button.hide()
        this.input.hide()

        player.name = this.input.value();
        playerCount++
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        
        this.greeting.html("Welcome to the Game, " +player.name)
        this.greeting.position(displayWidth/2-60, displayHeight/2-60); 
     })
    }


}