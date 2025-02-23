import { Item } from "../base-classes/Item.js";

export class Dough extends Item {
    constructor(game){
        super(game)
        this.game = game
        this.name = "Dough"
        this.image = document.getElementById('dough')
    }
}