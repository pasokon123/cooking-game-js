// make canvas
// movable player
// interactable cooking stations
// able to pick up items and put on stations
// MAKING PIZZA
// stations
// dishwashing station
// cutting tomatoes station
// apply tomato sauce

import { Player } from "./Player.js"
import { Inputs } from "./Inputs.js"
import { Tomato } from "./Tomato.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)
        this.inputs = new Inputs()
        this.tomato = new Tomato(this)
    }
    update(){
        this.player.update(this.inputs.keys)
    }
    draw(context){
        this.player.draw(context)
        this.tomato.draw(context)
    }
}