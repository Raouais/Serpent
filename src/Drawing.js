export default class Drawing{

    static snakeOver(end,element){
        Over.snakeOver(end,element);
    }

    static drawSnake(ctx,blocksize,snake) {
        ctx.save();
        ctx.fillStyle = "red";
        for(let block of snake.body)
            this.drawBlock(ctx,block,blocksize);
        ctx.restore();
    }

    static drawBlock(ctx,position,blocksize){
        const [x,y] = position;
        ctx.fillRect(x*blocksize,y*blocksize,blocksize,blocksize);
    }

    static drawApple(ctx,apple,blocksize){
        ctx.save();
        const [xPosition,yPosition] = apple.body;
        ctx.fillRect(xPosition*blocksize,yPosition*blocksize,blocksize,blocksize);
        ctx.restore();
    }
}
