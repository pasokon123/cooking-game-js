import { Item } from "../base-classes/Item.js"

export class Tomato extends Item{
    constructor(game){
        super(game)
        this.game = game
        this.name = "Tomato"
        this.image = document.getElementById('tomato')
    }
}