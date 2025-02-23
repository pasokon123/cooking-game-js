
// MAKING PIZZA
//
// stations
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
import { StorageTomato } from "../components/StorageTomato.js"
import { CuttingCounter } from "../components/CuttingCounter.js"
import { StorageDough } from "../components/StorageDough.js"
import { RollingCounter } from "../components/RollingCounter.js"

export class CookingGame {
    constructor(width, height){
        this.width = width
        this.height = height
        this.player = new Player(this)
        this.inputs = new Inputs(this)
        this.stations = [new CounterTop(this), new StorageDough(this), new CuttingCounter(this)
            ,new StorageTomato(this), new RollingCounter(this)]
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