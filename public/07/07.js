// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.A_1 = loadImage("../assets/images/7-1 (A).png");
    img.A_2 = loadImage("../assets/images/7-2 (A).png");
    img.message = loadImage("../assets/images/message.png");
    // soundFormats('mp3');
    // sound.a = loadSound("");;

    // video.final_a = createVideo("../assets/videos/動畫7-1.mp4");
    video.final_a = createVideo("../assets/videos/動畫3-1.mp4");
    video.final_a.hide();
    video.final_a.pause();
}

function setup() {
    createCanvas(1440, 1024);
}

function draw() {
    background(100);

    if (fadeStatus == "none") {
        gameContent();
    }

    fadeInOut("/00");
}


let startVideo = false;
let fiveSecond = false;

let page = 1;
let allText = ["你知道你同事常常動你的手機嗎？我之前還常看到他在你家附近閒晃！", "……他在你後面！"];
// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    // if(fiveSecond && !startVideo){
    if (page == 1) {
        imageMode(CENTER);
        image(img.A_1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
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
        // imageMode(CENTER);

        // image(img.A_2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        if (!startVideo && !fiveSecond) {
            video.final_a.time(0);
            video.final_a.loop();
            startVideo = true;
            fiveSecond = false;
        }

        // 繪製影片、檢查暫停的時間
        if (startVideo || fiveSecond) {
            imageMode(CORNER);
            image(video.final_a, 0, 0, width, height);

            if (video.final_a.time() >= 5 && !fiveSecond) {
                video.final_a.time(5);
                video.final_a.pause();
                fiveSecond = true;
                startVideo = false;
            }
        }

        imageMode(CENTER);
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
    // }


    if (fadeStatus == "none" && page > 2 && fiveSecond && !startVideo) {
        fadeStatus = "out";
    }


    // if (mouseIsPressed && fadeStatus == "none") {
    //     fadeStatus = "out";
    // }
}