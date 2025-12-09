// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.bg = loadImage("../assets/images/5-3.png");
    img.smallBg = loadImage("../assets/images/0-1.png");
    img.btn = loadImage("../assets/images/0-2.png");
    
    // soundFormats('mp3');
    // sound.a = loadSound("");;

    // video.a = createVideo("");
}

function setup() {
    createCanvas(1440, 1024);
}

function draw() {

    if (fadeStatus == "none") {
        gameContent();
    }

    fadeInOut("/01");
}

// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    imageMode(CENTER);
    image(img.bg, width/2, height/2, 1024*1.5, 1024*1.5);
    image(img.smallBg, width/2, height/2);
    
    if(frameCount < 0){
        typing("被監視的咖啡廳", 80, 450, 40, 5);
    }
    else{
        textSize(50);
        fill(255);
        text("遊戲說明", width/8, height/3.2);

        image(img.btn, width/2, height/1.1);
    }

    if (mouseIsPressed && fadeStatus == "none") {
        fadeStatus = "out";
    }
}