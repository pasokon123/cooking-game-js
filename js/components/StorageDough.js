import { Station } from '../base-classes/Station.js'
import { Dough } from './Dough.js'

export class StorageDough extends Station {
    constructor (game) {
        super(game)
        this.game = game
        this.x = 90
        this.y = 150
        this.image = document.getElementById('doughStorage')
        this.item = [new Dough(this)]
    }  
    fillUpStorage() {
        if (this.item.length < 1) {
            this.item.push(new Dough(this.game))
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