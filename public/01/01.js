// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.coffee = loadImage("../assets/images/動畫1-1_第一楨.png");
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
        image(img.order_1, 50, (height - height/5) * 1 / 5);
        image(img.order_2, 50, (height - height/5) * 2 / 5);
        image(img.order_3, 50, (height - height/5) * 3 / 5);
        image(img.order_4, 50, (height - height/5) * 4 / 5);
        image(img.order_5, 50, (height - height/5) * 5 / 5);
        if(addCoffee >= 1){
            image(img.check_1, 260, (height - height/5) * 1 / 5);
        }
        if(addCoffee >=2){
            image(img.check_2, 260, (height - height/5) * 2 / 5);
        }
        if(addCoffee >=3){
            image(img.check_3, 260, (height - height/5) * 3 / 5);
        }
        if(addCoffee >=4){
            image(img.check_4, 260, (height - height/5) * 4 / 5);
        }
        if(addCoffee >=5){
            image(img.check_5, 260, (height - height/5) * 5 / 5);
            addCoffee = -1;
            completeAddCoffee = true;
        }        
    }
    if(addCoffee == -1 && completeAddCoffee){
       let posX_check = lerp(260, -10, posMoveLeft);
       let posX_order = lerp(50, -220, posMoveLeft);
         posMoveLeft += moveLeftSpeed;
       image(img.order_1, posX_order, (height - height/5) * 1 / 5);
        image(img.order_2, posX_order, (height - height/5) * 2 / 5);
        image(img.order_3, posX_order, (height - height/5) * 3 / 5);
        image(img.order_4, posX_order, (height - height/5) * 4 / 5);
        image(img.order_5, posX_order, (height - height/5) * 5 / 5);
       image(img.check_1, posX_check, (height - height/5) * 1 / 5)
       image(img.check_2, posX_check, (height - height/5) * 2 / 5)
       image(img.check_3, posX_check, (height - height/5) * 3 / 5)
       image(img.check_4, posX_check, (height - height/5) * 4 / 5)
       image(img.check_5, posX_check, (height - height/5) * 5 / 5)
    }


    if (mouseIsPressed && fadeStatus == "none" && fiveSecond && addCoffee == 5) {
        fadeStatus = "out";
    }
}