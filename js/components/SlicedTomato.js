import { Item } from "../base-classes/Item.js";

export class SlicedTomato extends Item {
    constructor(game){
        super(game)
        this.game = game
        
        this.image = document.getElementById('slicedTomato')
    }
}