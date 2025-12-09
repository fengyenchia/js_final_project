// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

// function preload() {
//     img.a = loadImage("");
    
//     soundFormats('mp3');
//     sound.a = loadSound("");;

//     video.a = createVideo("");
// }

function setup() {
    createCanvas(1440, 1024);
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
    // typing("被監視的咖啡廳", 80, 450, 40, 5);

    if (mouseIsPressed && fadeStatus == "none") {
        fadeStatus = "out";
    }
}