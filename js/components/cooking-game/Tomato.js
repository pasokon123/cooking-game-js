export class Tomato {
    constructor(game){
        this.game = game
        this.width = 25
        this.height = 25
        this.x = 100
        this.y = 20
    }
    update() {
        if (this.game.player.colliding && this.game.player.pickUp) {
            this.x = this.game.player.x
            this.y = this.game.player.y
        }

    }
    draw(context){
        context.fillStyle = 'red'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}