export class CuttingStation {
    constructor (game) {
        this.game = game
        this.width = 64
        this.height = 64
        this.x = 200
        this.y = 80
        this.image = document.getElementById('cutting')
        this.collidingWithPlayer = false
        this.onTable = []
    }
    tomatoPosition() {
        this.onTable.forEach(item => {
            item.x = this.x + 20
            item.y = this.y + 10
        })
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
    update () {
        this.tomatoPosition()
    }
    draw (context) {
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
        this.onTable.forEach(item => item.draw(context))
    }
}