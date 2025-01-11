export class Inputs {
    constructor(){
        this.keys = []
        this.holdingItem = false

        window.addEventListener('keydown', event => {
            if (event.key === 'ArrowDown') event.preventDefault()
            if (event.key === 'ArrowUp') event.preventDefault()
            if (event.code === 'Space') event.preventDefault()

            if ((event.key === 'ArrowLeft' ||
                event.key === 'ArrowRight' ||
                event.key === 'ArrowUp' ||
                event.key === 'ArrowDown'
            ) && !this.keys.includes(event.key)) {
                event.preventDefault()
                this.keys.push(event.key)
                console.log(this.keys)
            }
        })
        window.addEventListener('keyup', event => {
            if (event.code === 'Space') event.preventDefault()

            if ((event.key === 'ArrowLeft' && this.keys.includes('ArrowLeft')) ||
                (event.key === 'ArrowRight' && this.keys.includes('ArrowRight')) ||
                (event.key === 'ArrowUp' && this.keys.includes('ArrowUp')) ||
                (event.key === 'ArrowDown' && this.keys.includes('ArrowDown')) 
        ) {
                event.preventDefault()
                this.keys.splice(event.key, 1)
                console.log(this.keys)
            }
        })
        window.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                if (!this.holdingItem) {
                    this.holdingItem = true
                } else {
                    this.holdingItem = false
                }
            }
        })

    }
    
}