const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if(dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function() {
        dino.classList.remove("jump");
    },300);
    }
}

// dinozorun canlı olup olmadığını kontrol etme
let isAlive = setInterval(function() {
    
    // dinozorun y pozisyonundaki konumunu tespit etme
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    //kaktüsün x pozisyonundaki konumunu tespit etme
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    // dinozor ve kaktüsün çarpıştıkları yeri tespit et
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over!");
    }

},10);

document.addEventListener("keydown", function(event) {
    jump();
})