export class Player {
    constructor(game){
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 50
        this.y = 50
        this.speed = 3
        this.image = document.getElementById('player')
        this.collidingWithTomato = false
        this.holdingItem = false
        this.item = []
        
    }
    holdItem() {
        if (this.item.length > 0) {
            this.item[0].x = this.x
            this.item[0].y = this.y + 20
        }
    }
    action() {
        if (this.item.length < 1) {
            this.takeTomatoFromStorage()
            this.pickUpItem()
        } else {
            this.game.droppedItems.push(this.item.pop())
        }
    }
    takeTomatoFromStorage() {
        if (this.game.tomatoStorage.isCollidingWithPlayer()) {
            this.item.push(this.game.tomatoStorage.storage.pop())
        }
    }
    pickUpItem() {
        if (this.item.length < 1) {
            this.game.droppedItems.forEach(item => {
                if (item.isCollidingWithPlayer()) {
                    let droppedItemIndex = this.game.droppedItems.indexOf(item)
                    this.item.push(this.game.droppedItems[droppedItemIndex])
                    this.game.droppedItems.splice(droppedItemIndex, 1)
                }
            });
        }
    }
    isCollidingWithTomato() {
        if (this.x + this.width > this.game.tomato.x &&
            this.x < this.game.tomato.x + this.game.tomato.width &&
            this.y < this.game.tomato.y + this.game.tomato.height &&
            this.y + this.height > this.game.tomato.y
        ) {
            return true
        } else {
            return false
        }
    }
    tomatoPickUp() {
        if (this.isCollidingWithTomato() && this.holdingItem) {
            this.game.tomato.x = this.x 
            this.game.tomato.y = this.y + 20
        } 
        // else if (this.game.cuttingStation.collidingWithPlayer && !this.holdingItem) {
        //     this.game.tomato.x = this.game.cuttingStation.x + 16
        //     this.game.tomato.y = this.game.cuttingStation.y + 8
        // }
    }
    playerMovement(input) {
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
    update(input){
        this.playerMovement(input)
        this.holdItem()
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y)
        this.item.forEach(item => item.draw(context))
        
    }
}