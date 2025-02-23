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
        this.game.stations.forEach(station => {
            if (station.isCollidingWithPlayer() && !station.hasItem() && this.isHoldingItem()) {

            }
        })
    }
    pickUpItem() {
        this.takeItemFromFloor()
        this.takeItemFromStation()
    }

    takeItemFromStation () {
        this.game.stations.forEach(station => {
            if (station.isCollidingWithPlayer()
                 && !this.isHoldingItem()
                 && !this.isCollidingWithDroppedItem()) {
                    this.item.push(station.item.pop())
            } else if (this.isHoldingItem() && station.isCollidingWithPlayer()) {
                    station.item.push(this.item.pop())
            } 
        })
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
    isCollidingWithStation () {
        this.game.stations.forEach(station => {
            if (station.isCollidingWithPlayer()) {
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