import { Item } from "../base-classes/Item.js"

export class Tomato extends Item{
    constructor(game){
        super(game)
        this.game = game
        this.x = this.game.player.x
        this.y = this.game.player.y
        this.image = document.getElementById('tomato')
    }
}