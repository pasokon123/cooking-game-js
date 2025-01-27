export class Tomato {
    constructor(game){
        this.game = game
        this.width = 40
        this.height = 40
        this.x = 100
        this.y = 20
        this.image = document.getElementById('tomato')
    }
    update() {
        if (this.tomatoStorage.colliding && !this.game.pickUp) {
            this.x = this.tomatoStorage.x + 100
            this.y = this.tomatoStorage.y + 100
        } else if (this.game.player.colliding && this.game.player.pickUp) {
            this.x = this.game.player.x
            this.y = this.game.player.y
        }

    }
    draw(context){
        context.fillStyle = 'rgba(225,225,225,0.5)';
        context.fillRect(25,72,32,32);
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
    }
}