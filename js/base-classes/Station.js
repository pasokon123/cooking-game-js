export class Station {
    constructor (game) {
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 0
        this.y = 0
        this.collidingWithPlayer = false
        this.item = []
    }
    positionItem() {
        this.item.forEach(item => {
            item.x = this.x + this.width / 2 - item.width / 2 + 5
            item.y = this.y + this.height / 2 - item.height / 2 + 5
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
    hasItem () {
        if (this.item.length > 0) {
            return true
        } else {
            return false
        }
    }
    checkItem () {
        if (this.hasItem()) {
            return this.item[0].name
        }
    }
    update () {
        this.positionItem()
    }
    draw (context) {
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
        this.item.forEach(item => item.draw(context))
    }
}