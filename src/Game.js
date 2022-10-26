import Snake from "./Snake.js";
import Apple from "./Apple.js";
import Drawing from "./Drawing.js";
export default class Game{
    constructor(){
        this.canvasWidth = 400;
        this.canvasHeight = 400;
        this.delay = 100;
        this.snakee;
        this.applee;
        this.cercle = [0,5];
        this.positions = "right";
        this.end = false;
        this.score = 0;
        this.level = 0;
        this.t = 10;
        this.lifes = 0;
        this.body = [[7,4],[6,4],[5,4],[4,4],[3,4]];
        this.blocksize = 20;
        this.minX = 0;
        this.minY = 0;
        this.element = document.getElementById('score');
        this.element2 = document.getElementById("over");
        this.element3 = document.getElementById("level");
        this.element4 = document.getElementById('lifes');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    init(){
        this.canvas.style.border = "5px solid green";
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        document.body.appendChild(this.canvas);
        this.element2.innerHTML = "Appuyer sur la lettre S pour le départ";
    }
    lunch(){
        this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.snakee = new Snake(this.positions,this.body);
        this.applee = new Apple(this.cercle,this.ctx);
        this.element3.innerHTML = "Level "+this.level;
        this.element4.innerHTML = this.lifes;
        Drawing.drawApple(this.ctx,this.applee,this.blocksize);
        Drawing.drawSnake(this.ctx,this.blocksize,this.snakee);
    }
    refreshCanvas(){
        this.lunch();
        if(this.snakee.eatItself() && this.lifes <= 0  || this.snakee.wallCollision(this.minX,this.minY,this.blocksize)){
            this.end = true;
            this.lifes = 0;
            this.snakeOver(false,this.element2);
        } else {
            if(this.snakee.eatItself())
                this.lifes--;
            this.applee.isAte(this.blocksize);
            this.applee.isOnSnake(this.applee,this.snakee,this.canvasWidth,this.canvasHeight,this.blocksize);
            this.snakee.advence(this.applee);
            this.element.innerHTML = this.score;  
            if(this.canvasWidth >= 500){
                this.element2.classList.remove("colorRed");
                this.element2.classList.add("colorBlue");
                this.element2.innerHTML = "Vous pouvez maintenant traverser les murs !!";
                this.snakee.passThroughTheWall(this.minX,this.minX,this.blocksize);
            }else{
                this.snakee.wallCollision(this.minX,this.minY,this.blocksize);
            }    
                
        }
            setTimeout(this.refreshCanvas.bind(this), this.delay);
    }
    getRandom(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    snakeOver(end,element){
        element.classList.remove("colorBlue");
        element.classList.add("colorRed");
        element.innerHTML = "Vous avez perdu ! Appuyer sur espace pour recommencer une partie.";
        if(end){
            location.reload();
        }
    }

}
