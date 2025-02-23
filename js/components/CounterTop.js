import { Station } from '../base-classes/Station.js'

export class CounterTop extends Station {
    constructor (game) {
        super(game)
        this.game = game
        this.x = 300
        this.y = 50
        this.image = document.getElementById('counterTop')
    }  
}