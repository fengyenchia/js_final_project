// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    // img.a = loadImage("");
    
    // soundFormats('mp3');
    // sound.a = loadSound("");;

    video.coffee = createVideo("../assets/videos/動畫1-1.mp4");
}

function setup() {
    createCanvas(1440, 1024);
    video.coffee.position(0, 0);
    // video.coffee.position((width - video.coffee.width) / 2, (height - video.coffee.height) / 2);
}

function draw() {
    background(100);

    if (fadeStatus == "none") {
        gameContent();
    }

    fadeInOut("/02");
}

// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {

    if(mouseIsPressed){
        video.coffee.play();
    }

    if (mouseIsPressed && fadeStatus == "none") {
        fadeStatus = "out";
    }
}