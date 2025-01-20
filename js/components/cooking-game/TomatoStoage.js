export class TomatoStorage {
    constructor (game) {
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 200
        this.y = 200
    }
    draw (context) {
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}