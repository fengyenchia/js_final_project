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

    fadeInOut("/05");
}

// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    fill(255);
    stroke(0);
    circle(width/2, height/2, 200);


    if (mouseIsPressed && fadeStatus == "none") {
        fadeStatus = "out";
    }
}