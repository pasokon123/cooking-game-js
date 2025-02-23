import { Station } from "../base-classes/Station.js"
import { SlicedTomato } from "./SlicedTomato.js"

export class CuttingCounter extends Station {
    constructor(game) {
        super(game)
        this.game = game
        this.x = 300
        this.y = 150
        this.image = document.getElementById('cuttingBoard')
    }
    cut () {
        if (this.hasItem()) {
            this.game.player.speed = 0
            setTimeout(() => {
                this.item = [new SlicedTomato(this)]
                this.game.player.speed = 3
            }, 2000);
        }
    }
    
}