export class Player {
    constructor(game){
        this.game = game
        this.width = 50
        this.height = 50
        this.x = 50
        this.y = 50
        this.speed = 3
        this.image = document.getElementById('player')
        this.item = []
    }
    holdItem() {
        if (this.item.length > 0) {
            this.item[0].x = this.x
            this.item[0].y = this.y + 20
        }
    }
    action() {
        // If not holding item
        if (this.item.length < 1) {
            this.takeItemFromFloor()
            this.takeTomatoFromStorage()
            this.takeItemFromCuttingStation()
        // If holding item
        } else if (this.game.cuttingStation.isCollidingWithPlayer() && this.game.cuttingStation.onTable.length < 1){
            this.game.cuttingStation.onTable.push(this.item.pop())
        } else {
            this.game.droppedItems.push(this.item.pop())
        }
    }
    takeTomatoFromStorage() {
        if (!this.isHoldingItem() &&
             this.game.tomatoStorage.isCollidingWithPlayer() &&
            !this.game.player.isCollidingWithDroppedItem()) {
                 this.item.push(this.game.tomatoStorage.storage.pop())
        }
    }
    takeItemFromCuttingStation() {
        if (!this.isHoldingItem &&
             this.game.cuttingStation.isCollidingWithPlayer() &&
            !this.game.player.isCollidingWithDroppedItem() &&
             this.game.cuttingStation.onTable.length > 0) {
                this.item.push(this.game.cuttingStation.onTable.pop())
        }
    }
    takeItemFromFloor() {
        if (!this.isHoldingItem()) {
            this.game.droppedItems.forEach(item => {
                if (item.isCollidingWithPlayer()) {
                    let droppedItemIndex = this.game.droppedItems.indexOf(item)
                    this.item.push(this.game.droppedItems[droppedItemIndex])
                    this.game.droppedItems.splice(droppedItemIndex, 1)
                }
            });
        }
    }
    isCollidingWithDroppedItem() {
        this.game.droppedItems.forEach(item => {
            if (item.isCollidingWithPlayer()) {
                return true
            } else {
                return false
            }
        })
    }
    isHoldingItem () {
        if (this.item.length > 0) {
            return true
        } else {
            return false
        }
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