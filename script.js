const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false
const img = document.querySelector("#character")

let x = 0
let y = 0
let pos = 0
let frameCounter= 0
let type= 0

function animationLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img,
        pos * 32, type * 32, 32, 32,
        x, y, 32, 32)

        frameCounter++
        if(frameCounter >= 10){
            pos++ 
            if (pos >=3 ){ pos=0 }    
            frameCounter= 0
        }

    window.requestAnimationFrame(animationLoop)
}

function main() {
    window.requestAnimationFrame(animationLoop)
}


window.onkeydown = function (ev){
  if(ev.code === "KeyA") {type = 1; x-=5}
  if(ev.code === "KeyD") {type = 2; x+=5}
  if(ev.code === "KeyW") {type = 3; y-=5}
  if(ev.code === "KeyS") {type = 0; y+=5}
  
}

main()