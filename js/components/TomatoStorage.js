import { Tomato } from './Tomato.js'

export class TomatoStorage {
    constructor(game) {
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 90
        this.y = 50
        this.image = document.getElementById('tomatoStorage')
        this.collidingWithPlayer = false
        this.item = [new Tomato(this.game)]
    }
    fillUpStorage() {
        if (this.item.length < 1) {
            this.item.push(new Tomato(this.game))
        }
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
    update() {
        this.fillUpStorage()
    }
    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
    }
}