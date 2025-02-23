import { Station } from "../base-classes/Station.js"
import { SlicedTomato } from "./SlicedTomato.js"
import { Tomato } from "./Tomato.js"

export class CuttingCounter extends Station {
    constructor(game) {
        super(game)
        this.game = game
        this.x = 300
        this.y = 150
        this.image = document.getElementById('cuttingCounter')
    }
    work () {
        console.log(this.checkItem())
        if (this.checkItem() === "Tomato") {
            this.game.player.speed = 0
            setTimeout(() => {
                this.item = [new SlicedTomato(this)]
                this.game.player.speed = 3
            }, 2000);
         }
      }
    }