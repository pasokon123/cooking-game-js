export class CuttingStation {
    constructor (game) {
        this.game = game
        this.width = 64
        this.height = 64
        this.x = 200
        this.y = 200
        this.image = document.getElementById('cutting')
        this.colliding = false
    }
    update () {
        if (this.x + this.width > this.game.tomato.x &&
            this.x < this.game.player.x + this.game.player.width &&
            this.y < this.game.player.y + this.game.player.height &&
            this.y + this.height > this.game.player.y
        ) {
            this.colliding = true
        } else {
            this.colliding = false
        }

        
    }
    draw (context) {
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
    }
}