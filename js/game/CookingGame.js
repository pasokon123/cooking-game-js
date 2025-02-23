// make canvas
// movable player
// interactable cooking stations
// able to pick up items and put on stations
// MAKING PIZZA
//
// stations
// cutting tomatoes station
// crushing tomatoes station
// oven station
// 
//
// actions
// apply tomato sauce
// apply cheese
// apply toppings (slices tomatoes, sliceed salami)


import { Player } from "../components/Player.js"
import { Inputs } from "../components/Inputs.js"
import { CounterTop } from "../components/CounterTop.js"
import { TomatoStorage } from "../components/TomatoStorage.js"
import { CuttingCounter } from "../components/CuttingCounter.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)
        this.inputs = new Inputs(this)
        this.stations = [new CounterTop(this), new TomatoStorage(this), new CuttingCounter(this)]
        this.droppedItems = []
    }
    update(){
        this.player.update(this.inputs.keys)
        this.stations.forEach(station => station.update())
    }
    draw(context){
        context.fillStyle = 'rgba(225,225,225,0.1)';
        this.player.draw(context)
        this.droppedItems.forEach(item => item.draw(context))
        this.stations.forEach(station => station.draw(context))
    }
}