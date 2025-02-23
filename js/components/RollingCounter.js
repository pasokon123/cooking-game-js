import { Station } from "../base-classes/Station.js"
import { PizzaDough } from "./PizzaDough.js"

export class RollingCounter extends Station {
    constructor(game) {
        super(game)
        this.game = game
        this.x = 300
        this.y = 250
        this.image = document.getElementById('rollingCounter')
    }
    work () {
        if (this.checkItem() === "Dough") {
            this.game.player.speed = 0
            setTimeout(() => {
                this.item = [new PizzaDough(this)]
                this.game.player.speed = 3
            }, 2000);
         }
      }
    }
    
