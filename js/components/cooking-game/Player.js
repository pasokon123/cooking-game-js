export class Player {
    constructor(game){
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 50
        this.y = 50
        this.speed = 3
        this.image = document.getElementById('player')
        this.colliding = false
        this.holdingItem = false
        
    }
    update(input){
        // Tomato collision
        if (this.x + this.width > this.game.tomato.x &&
            this.x < this.game.tomato.x + this.game.tomato.width &&
            this.y < this.game.tomato.y + this.game.tomato.height &&
            this.y + this.height > this.game.tomato.y
        ) {
            this.colliding = true
        } else {
            this.colliding = false
        }

        if (this.colliding && this.holdingItem) {
            this.game.tomato.x = this.x 
            this.game.tomato.y = this.y + 20
        } else if (this.game.cuttingStation.colliding && !this.holdingItem) {
            this.game.tomato.x = this.game.cuttingStation.x + 16
            this.game.tomato.y = this.game.cuttingStation.y + 8
        }


       if (input.includes('ArrowLeft')){
        this.x -= this.speed
       } else if (input.includes('ArrowRight')){
        this.x += this.speed
       } else if (input.includes('ArrowUp')) {
        this.y -= this.speed
       } else if (input.includes('ArrowDown')) {
        this.y += this.speed
       }


    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
    }
}