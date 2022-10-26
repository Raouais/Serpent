import {myGame} from "./mygame.js";

export default class Apple{
    constructor(body = [0,5],ctx){
        this.body = body;
        ctx.fillStyle = "blue";
    }
    isOnSnake(applee,snakee,canvasWidth,canvasHeight,blocksize){
        for(let block of snakee.body){
            if(block[0] == applee.body[0] && block[1]== applee.body[1]){
                const randX = myGame.getRandom(0,canvasWidth/blocksize-1);
                const randY = myGame.getRandom(0,canvasHeight/blocksize-1);
                myGame.cercle = [randX,randY];
            }
        }
    }
    isAte(blocksize){
        if(myGame.snakee.body[0][0] == this.body[0] && myGame.snakee.body[0][1] == this.body[1]){
            const randX = myGame.getRandom(0,myGame.canvasWidth/blocksize-1);
            const randY = myGame.getRandom(0,myGame.canvasHeight/blocksize-1);
            myGame.cercle = [randX,randY];
            myGame.score++;
            myGame.delay--;
            if(myGame.score % myGame.t == 0){
                myGame.canvasHeight += 100;
                myGame.canvasWidth +=  100;
                myGame.t += 20;
                myGame.level++;
            }
            if(myGame.score > 40 && myGame.score % 10 == 0)
                myGame.lifes++;
            return true
        }
        return false;
    }
}
        