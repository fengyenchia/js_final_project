// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.coffee = loadImage("../assets/images/動畫1-1_第一楨.png");
    img.paperbg = loadImage("../assets/images/1-2.png");
    img.paper = loadImage("../assets/images/1-3.png");
    img.check_1 = loadImage("../assets/images/1-4.png");
    img.check_2 = loadImage("../assets/images/1-5.png");
    img.check_3 = loadImage("../assets/images/1-6.png");
    img.check_4 = loadImage("../assets/images/1-7.png");
    img.check_5 = loadImage("../assets/images/1-8.png");
    img.order_1 = loadImage("../assets/images/1-9.png");
    img.order_2 = loadImage("../assets/images/1-10.png");
    img.order_3 = loadImage("../assets/images/1-11.png");
    img.order_4 = loadImage("../assets/images/1-12.png");
    img.order_5 = loadImage("../assets/images/1-13.png");
    img.message_1 = loadImage("../assets/images/1-14.png");
    img.message_2 = loadImage("../assets/images/1-15.png");
    img.message_3 = loadImage("../assets/images/1-16.png");
    img.receivePaper = loadImage("../assets/images/1-17.png");
    img.smallbtn = loadImage("../assets/images/1-18.png");

    // soundFormats('mp3');
    // sound.a = loadSound("");

    video.coffee = createVideo("../assets/videos/動畫1-1.mp4");
    video.coffee.hide();
    video.coffee.pause();
}


let startVideo = false;
let fiveSecond = false;
let addCoffee = 0;
let completeAddCoffee = false;
let posMoveLeft = 0;
let moveLeftSpeed = 0.02;

let paper = 0;
let receivePaper = false;

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
    if (addCoffee == 0 && !(keyIsPressed && key == ' ')) {
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

        if (!startVideo && fadeStatus == "none" && addCoffee < 5) {
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
            console.log(addCoffee);
        }
    }

    if ((addCoffee != 0 || startVideo) && addCoffee != -1) {
        image(img.order_1, 0, (height - height / 4) * 1 / 5);
        image(img.order_2, 0, (height - height / 4) * 2 / 5);
        image(img.order_3, 0, (height - height / 4) * 3 / 5);
        image(img.order_4, 0, (height - height / 4) * 4 / 5);
        image(img.order_5, 0, (height - height / 4) * 5 / 5);
        if (addCoffee >= 1) {
            image(img.check_1, 210, (height - height / 4) * 1 / 5);
        }
        if (addCoffee >= 2) {
            image(img.check_2, 210, (height - height / 4) * 2 / 5);
        }
        if (addCoffee >= 3) {
            image(img.check_3, 210, (height - height / 4) * 3 / 5);
        }
        if (addCoffee >= 4) {
            image(img.check_4, 210, (height - height / 4) * 4 / 5);
        }
        if (addCoffee >= 5) {
            image(img.check_5, 210, (height - height / 4) * 5 / 5);
            addCoffee = -1;
            completeAddCoffee = true;
        }
    }
    if (addCoffee == -1 && completeAddCoffee) {
        let posX_check = lerp(210, -10, posMoveLeft);
        let posX_order = lerp(0, -220, posMoveLeft);
        posMoveLeft += moveLeftSpeed;
        image(img.order_1, posX_order, (height - height / 4) * 1 / 5);
        image(img.order_2, posX_order, (height - height / 4) * 2 / 5);
        image(img.order_3, posX_order, (height - height / 4) * 3 / 5);
        image(img.order_4, posX_order, (height - height / 4) * 4 / 5);
        image(img.order_5, posX_order, (height - height / 4) * 5 / 5);
        image(img.check_1, posX_check, (height - height / 4) * 1 / 5)
        image(img.check_2, posX_check, (height - height / 4) * 2 / 5)
        image(img.check_3, posX_check, (height - height / 4) * 3 / 5)
        image(img.check_4, posX_check, (height - height / 4) * 4 / 5)
        image(img.check_5, posX_check, (height - height / 4) * 5 / 5)
    }

    // ----- 紙條
    if (posMoveLeft >= 1) {
        imageMode(CENTER);
        image(img.paperbg, width / 2, height / 2, 1440, 1024);
        image(img.receivePaper, 140, (height - height / 4) * 1 / 5);
        if(!receivePaper){
            image(img.smallbtn, 210, 80 + (height - height / 4) * 1 / 5);
        }
        else{
            imageMode(CORNER);
            image(img.smallbtn, -300, 80 + (height - height / 4) * 1 / 5);
        }

        if (receivePaper) {
            if(paper==1){
                image(img.message_1, width / 3-5, height / 2.4);
            }
            else if(paper==2){
                image(img.message_2, width / 3-5, height / 2.4);
            }
            else if(paper==3){
                image(img.message_3, width / 3-5, height / 2.4);
            }
            if (frameCount % 180 === 0) {  // 等3秒
                paper = -1;
            }
        }
    }

    textSize(20);
    fill(255)
    text(mouseX + "," + mouseY, mouseX, mouseY);

    // if (paper >= 25) {
    //     receivePaper = true;
    // }

    // if (mouseIsPressed && fadeStatus == "none" && fiveSecond && addCoffee == 5) {
    if (fadeStatus == "none" && paper == -1) {
        fadeStatus = "out";
    }
}

function mouseClicked() {
    if (mouseX > 145 && mouseX < 275 && mouseY > 210 && mouseY < 250) {
        receivePaper = true;
        console.log(paper);
        paper=1;
    }
}