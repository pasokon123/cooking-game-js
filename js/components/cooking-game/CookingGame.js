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

// IMPORTANT 
// remake with arrays holding items

import { Player } from "./Player.js"
import { Inputs } from "./Inputs.js"
import { Tomato } from "./Tomato.js"
import { CuttingStation } from "./CuttingStation.js"
import { TomatoStorage } from "./TomatoStorage.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)
        this.inputs = new Inputs(this)
        this.cuttingStation = new CuttingStation(this)
        this.tomatoStorage = new TomatoStorage(this)
        this.droppedItems = []
    }
    update(){
        this.player.update(this.inputs.keys)
        this.cuttingStation.update()
        this.tomatoStorage.update()
    }
    draw(context){
        context.fillStyle = 'rgba(225,225,225,0.5)';
        this.player.draw(context)
        this.cuttingStation.draw(context)
        this.tomatoStorage.draw(context)
        this.droppedItems.forEach(item => item.draw(context))
    }
}