export class Player {
    constructor(game){
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 50
        this.y = 50
    }
    update(){

    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}