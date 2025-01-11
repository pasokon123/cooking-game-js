// make canvas
// movable player
// interactable cooking stations
// able to pick up items and put on stations
import { Player } from "./Player.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)

    }
    update(){

    }
    draw(context){
        this.player.draw(context)
    }
}