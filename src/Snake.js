import {myGame} from "./mygame.js";
export default class Snake{
    constructor(position,body){
        this.body = body;
        this.position = position;
    }
    advence(applee){
        const newPosition = this.body[0].slice();

        switch (this.position) {
            case "left":
                newPosition[0]--;
            break;
            case 'right':
                newPosition[0]++;
            break;
            case "up":
                newPosition[1]--;
            break;
            case "down":
                newPosition[1]++;
            break;
        }
        this.body.unshift(newPosition);
        if(!myGame.applee.isAte(myGame.blocksize))
            this.body.pop();
    }
    setDirection (newDirection){
        let possiblePosition = [];
        switch (this.position) {
            case "left":
            case 'right':
                possiblePosition = ["up","down"];
            break;
            case "up":
            case "down":
                possiblePosition = ["right","left"];
            break;
        }
        for(let pos of possiblePosition){
            if(newDirection === pos)
                myGame.positions = newDirection;
        }
    }
    passThroughTheWall(minX,minY,blocksize){
        let maxX = myGame.canvasWidth/blocksize;
        let maxY = myGame.canvasHeight/blocksize;
        const turnBack = this.body[0].slice();
        const touchMaxX = this.body[0][0] > maxX-1;
        const touchMinX = this.body[0][0] < minX;
        const touchMaxY = this.body[0][1] > maxY-1;
        const touchMinY = this.body[0][1] < minY;
        switch(true){
            case touchMaxX:
                turnBack[0] = minX;
            break;
            case touchMinX:
                turnBack[0] = maxX-1;
            break;
            case touchMaxY:
                turnBack[1] = minY;
            break;
            case touchMinY:
                turnBack[1] = maxY-1;
            break;
        }
        if(touchMaxX || touchMaxY || touchMinX || touchMinY){
            this.body.unshift(turnBack);
            this.body.pop();
        }
    }
    wallCollision(minX,minY,blocksize){
        let maxX = myGame.canvasWidth/blocksize;
        let maxY = myGame.canvasHeight/blocksize;
        const headArray = this.body[0].slice();
        const [headX,headY] = headArray;
        if(headX == minX-1 || headY == minY-1 || headX == maxX || headY == maxY){
            return true;
        }
        return false;
    }
    eatItself(){
        for(let i = 1; i < this.body.length; i++){
            if(this.body[0][0] == this.body[i][0] && this.body[0][1] == this.body[i][1]){
                return true;
            }
        }
        return false;
    }
}
