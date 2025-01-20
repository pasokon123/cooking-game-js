// make canvas
// movable player
// interactable cooking stations
// able to pick up items and put on stations
// MAKING PIZZA
//
// stations
// dishwashing station
// cutting tomatoes station
// crushing tomatoes station
//
// actions
// apply tomato sauce
// apply cheese
// apply toppings (slices tomatoes, sliceed salami)

// NEXT STEP
// make tomato storage
// when you stand next to it and click a button, a tomato will appear
// and the player will be automatically carrying it without spacebar

import { Player } from "./Player.js"
import { Inputs } from "./Inputs.js"
import { Tomato } from "./Tomato.js"
import { TomatoStorage } from "./TomatoStoage.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)
        this.inputs = new Inputs()
        this.tomato = new Tomato(this)
        this.tomatoStorage = new TomatoStorage(this)
    }
    update(){
        this.player.update(this.inputs.keys)
    }
    draw(context){
        this.player.draw(context)
        this.tomato.draw(context)
        this.tomatoStorage.draw(context)
    }
}