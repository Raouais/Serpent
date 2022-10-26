import "babel-polyfill";   
import {myGame} from "./mygame.js";


window.onload = () =>{

    
    myGame.init();  
        
    document.onkeydown = e =>{
        let newDirection;
        const key = e.keyCode;

        switch(key){
            case 37:
                newDirection = "left";
            break;
            case 38:
                newDirection = "up";
            break;
            case 39:
                newDirection = "right";
            break;
            case 40:
                newDirection = "down";
            break;
            case 83: 
                myGame.element2.classList.remove("colorBlue");
                myGame.element2.classList.add("colorRed");
                myGame.element2.innerHTML = "Vous ne pouvez pas traverser les murs";
                myGame.refreshCanvas();
            break;
            case 32:
                if(myGame.end == true)
                    myGame.snakeOver(myGame.end,myGame.element2);
            break;
        }
        
        myGame.snakee.setDirection(newDirection);
    }

    
}

