// make canvas
// movable player
// interactable cooking stations
// able to pick up items and put on stations
import { Player } from "./Player.js"
import { Inputs } from "./Inputs.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)
        this.inputs = new Inputs()
    }
    update(){
        this.player.update(this.inputs.keys)
    }
    draw(context){
        this.player.draw(context)
    }
}