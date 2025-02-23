import { Tomato } from './Tomato.js'
import { Station } from '../base-classes/Station.js'

export class StorageTomato extends Station {
    constructor(game) {
        super(game)
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
    update () {
        this.positionItem()
        this.fillUpStorage()
    }
    draw (context) {
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
    }
}