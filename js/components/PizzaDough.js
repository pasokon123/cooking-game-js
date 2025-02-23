import { Item } from "../base-classes/Item.js";

export class PizzaDough extends Item {
    constructor(game){
        super(game)
        this.game = game
        this.width = 60
        this.height = 60
        this.name = "Pizza Dough"
        this.image = document.getElementById('pizzaDough')
    }
}