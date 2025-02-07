export class Tomato {
    constructor(game){
        this.game = game
        this.width = 40
        this.height = 40
        this.x = this.game.player.x
        this.y = this.game.player.y
        this.image = document.getElementById('tomato')
        this.placedOnTable = false
    }
    isCollidingWithPlayer() {
        if (this.x + this.width > this.game.player.x &&
            this.x < this.game.player.x + this.game.player.width &&
            this.y < this.game.player.y + this.game.player.height &&
            this.y + this.height > this.game.player.y
        ) {
            return true
        } else {
            return false
        }
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
    }
}