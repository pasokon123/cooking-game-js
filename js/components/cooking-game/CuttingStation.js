export class CuttingStation {
    constructor (game) {
        this.game = game
        this.width = 80
        this.height = 80
        this.x = 200
        this.y = 200
        this.image = document.getElementById('cutting')
        this.collidingWithPlayer = false
        this.hasItem = false
    }
    update () {
        this.isCollidingWithPlayer()
     
    }
    draw (context) {
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
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
    pickUp() {
       
    }
    
}