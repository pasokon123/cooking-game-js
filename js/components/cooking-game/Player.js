export class Player {
    constructor(game){
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 50
        this.y = 50
    }
    update(input){
       if (input.includes('ArrowLeft')){
        this.x--
       } else if (input.includes('ArrowRight')){
        this.x++
       } else if (input.includes('ArrowUp')) {
        this.y--
       } else if (input.includes('ArrowDown')) {
        this.y++
       }
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}