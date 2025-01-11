import { CookingGame } from "./CookingGame.js";

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500

const game = new CookingGame(canvas.width, canvas.height)

function animate(){
    game.draw(ctx)
    requestAnimationFrame(animate)
}
animate()