var canvas = new fabric.Canvas("canvas")
var positionX = 400
var positionY = 200
var tamanhoBloco = 30
var player = "player.png"
 function playerUpdate() {
    fabric.Image.fromURL(player, function(Img){
        playerObject = Img
        playerObject.scaleToWidth(141)
        playerObject.scaleToHeight(171)
        playerObject.set({
            top: positionY,
            left: positionX
        })
        canvas.add(playerObject)
    })

 } function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        bloco = Img
        bloco.scaleToWidth(tamanhoBloco)
        bloco.scaleToHeight(tamanhoBloco)
        bloco.set({
            top: positionY,
            left: positionX
        })
        canvas.add(bloco)
    })

 }

window.addEventListener("keydown", aKeyDown)

function aKeyDown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "37") {
        left()
    }
    if (keyPressed == "38") {
        up()
    }
    if (keyPressed == "39") {
        right()
    }
    if (keyPressed == "40") {
        down()
    }
    if (keyPressed == "87") {
        newImage("wall.jpg")
    }
    if (keyPressed == "71") {
        newImage("ground.png")
    }
    if (keyPressed == "76") {
        newImage("light_green.png")
    }
    if (keyPressed == "84") {
        newImage("trunk.jpg")
    }
    if (keyPressed == "82") {
        newImage("roof.jpg")
    }
    if (keyPressed == "89") {
        newImage("yellow_wall.png")
    }
    if (keyPressed == "68") {
        newImage("dark_green.png")
    }
    if (keyPressed == "85") {
        newImage("unique.png")
    }
    if (keyPressed == "67") {
        newImage("cloud.jpg")
    }
    if (e.shiftKey == true && keyPressed == "80") {
        tamanhoBloco= tamanhoBloco + 10
        document.getElementById("current_width").innerHTML = tamanhoBloco
        document.getElementById("current_height").innerHTML = tamanhoBloco
    }
    if (e.shiftKey == true && keyPressed == "77") {
        tamanhoBloco= tamanhoBloco - 10
        document.getElementById("current_width").innerHTML = tamanhoBloco
        document.getElementById("current_height").innerHTML = tamanhoBloco
    }
    
    

}

function left() {
    if (positionX > 0) {
        positionX = positionX - 10
        playerUpdate()
        canvas.remove(playerObject)
    }
}
function up() {
    if (positionY > 0) {
        positionY = positionY - 10
        playerUpdate()
        canvas.remove(playerObject)
    }
}

function right() {
    if (positionX < 670) {
        positionX = positionX + 10
        playerUpdate()
        canvas.remove(playerObject)
    }
}
function down() {
    if (positionY < 250) {
        positionY = positionY + 10
        playerUpdate()
        canvas.remove(playerObject)
    }
}