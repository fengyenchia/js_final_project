// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.coffee = loadImage("../assets/images/動畫1-1_第一楨.png");
    img.paper = loadImage("../assets/images/1-3.png");

    // soundFormats('mp3');
    // sound.a = loadSound("");

    video.coffee = createVideo("../assets/videos/動畫1-1.mp4");
    video.coffee.hide();
    video.coffee.pause();
}


let startVideo = false;
let fiveSecond = false;
let addCoffee = 0;

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
    if (addCoffee < 1) {
        imageMode(CENTER);
        image(img.coffee, width / 2, height / 2, 1440, 1024);

        fill(0, 120);
        rect(0, 0, width, height);

        imageMode(CENTER);
        image(img.paper, width / 2, height / 2);
    }

    if (keyIsPressed && key == ' ') {
        imageMode(CENTER);
        image(img.coffee, width / 2, height / 2, 1440, 1024);

        if (!startVideo && fadeStatus == "none" && addCoffee != 5) {
            video.coffee.time(0);
            video.coffee.loop();
            startVideo = true;
            fiveSecond = false;
        }
    }

    // 繪製影片、檢查暫停的時間
    if (startVideo || fiveSecond) {
        imageMode(CORNER);
        image(video.coffee, 0, 0, width, height);

        if (video.coffee.time() >= 5 && !fiveSecond) {
            video.coffee.pause();
            video.coffee.time(5);
            fiveSecond = true;
            startVideo = false;
            addCoffee++;
        }
    }

    // if (fiveSecond) {
    //     fill(0, 120);
    //     rect(0, 0, width, height);
    // }


    if (mouseIsPressed && fadeStatus == "none" && fiveSecond && addCoffee == 5) {
        fadeStatus = "out";
    }
}