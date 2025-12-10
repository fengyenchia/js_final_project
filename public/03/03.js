// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.bg = loadImage("../assets/images/3-1.png");
    img.phone_1 = loadImage("../assets/images/3-2.png");
    img.phone_2 = loadImage("../assets/images/3-3.png");
    img.phone_3 = loadImage("../assets/images/3-4.png");

    img.message = loadImage("../assets/images/message.png");

    // soundFormats('mp3');
    // sound.a = loadSound("");

    video.badroom = createVideo("../assets/videos/動畫3-1.mp4");
    video.badroom.hide();
    video.badroom.pause();
}

function setup() {
    createCanvas(1440, 1024);
}

function draw() {
    background(100);

    if (fadeStatus == "none") {
        gameContent();
    }

    fadeInOut("/04");
}



let startVideo = false;
let fiveSecond = false;

let page = 1;
let allText = ["洗完了！真舒服！", "「手機正在從 iCloud 同步 3 張新照片」？怎麼回事？", " ", " ", "櫃台、倉庫、洗手間......呃啊！這都是我上班時的照片！有人在偷拍我嗎？"];

// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    
    if (!startVideo && !fiveSecond) {
        video.badroom.time(0);
        video.badroom.loop();
        startVideo = true;
        fiveSecond = false;
    }

    // 繪製影片、檢查暫停的時間
    if (startVideo || fiveSecond) {
        imageMode(CORNER);
        image(video.badroom, 0, 0, width, height);

        if (video.badroom.time() >= 5 && !fiveSecond) {
            video.badroom.time(5);
            video.badroom.pause();
            fiveSecond = true;
            startVideo = false;
        }
    }
    if(fiveSecond && !startVideo){
        if (page == 1) {
            imageMode(CENTER);
            image(img.bg, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
            imageMode(CENTER);
            image(img.message, width / 2, height - 150);
            //對話框
            textAlign(LEFT);
            textSize(32);
            fill(255);
            text('ＸＸＸ', 100, 820);
    
            textAlign(RIGHT);
            textSize(32);
            fill(255);
            text('>>點擊或按空白鍵繼續', 1360, 940);
        }
        else if (page == 2) {
            imageMode(CENTER);
    
            image(img.bg, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
    
            image(img.message, width / 2, height - 150);
    
            textAlign(LEFT);
            textSize(32);
            fill(255);
            text('ＸＸＸ', 100, 820);
    
            textAlign(RIGHT);
            textSize(32);
            fill(255);
            text('>>點擊或按空白鍵繼續', 1360, 940);
        }
        else if (page == 3) {
            imageMode(CENTER);
            image(img.phone_1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        }
        else if (page == 4) {
            imageMode(CENTER);
            image(img.phone_2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        }
        else if (page == 5) {
            imageMode(CENTER);
            image(img.phone_3, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
    
            image(img.message, width / 2, height - 150);
    
            textAlign(LEFT);
            textSize(32);
            fill(255);
            text('ＸＸＸ', 100, 820);
    
            textAlign(RIGHT);
            textSize(32);
            fill(255);
            text('>>點擊或按空白鍵繼續', 1360, 940);
        }
    
        typing(allText[page - 1], 100, 880, 30, 0, 0, 0, 0, 1, 10);
        if (currentText == allText[page - 1]) {
            if (mouseIsPressed || keyIsPressed && key == ' ') {
                page++;
                currentText = "";
                i = 0;
            }
        }
    }


    if (fadeStatus == "none" && page > 5) {
        fadeStatus = "out";
    }
}