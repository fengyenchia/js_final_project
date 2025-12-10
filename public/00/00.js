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
    image(img.bg, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
    image(img.smallBg, width / 2, height / 2.3);

    if (frameCount < 500) {
        typing("被監視的咖啡廳", (width-textWidth("被監視的咖啡廳"))/2, height / 2.3, 80, 450, height / 2.3, 40, 5, 2, 25);
    }
    else {
        textSize(50);
        fill(255);
        stroke(255);
        strokeWeight(2);
        text("遊戲說明", width / 8, height / 3.5);
        textSize(40);
        noStroke();
        textWrap(CHAR);
        textLeading(55);
        text("歡迎進入《被監視的咖啡廳》，這是一款以女性視角為主軸的互動式劇情選擇遊戲。你的操作將決定主角的安危。請專注於文字、畫面和音效推進的劇情。當需要持續動作時，請長按畫面；遇到提示時，請根據說明點擊畫面進入下一步。選擇彈出時，你必須謹慎判斷，你的選擇會將主角導向不同的命運。保持警覺，遊玩順利。", width / 8, height / 3.05, 1080);

        image(img.btn, width / 2, height / 1.14);
    }

    if (mouseIsPressed && fadeStatus == "none") {
        if( mouseX > width / 2 - 365/2 && mouseX < width / 2 + 365/2 && mouseY > height / 1.14 - 151/2 && mouseY < height / 1.14 + 151/2 ){
            fadeStatus = "out";
        }
    }
}