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

    video.final_b_1 = createVideo("../assets/videos/動畫1-1.mp4");
    video.final_b_1.hide();
    video.final_b_1.pause();

    video.final_b_2 = createVideo("../assets/videos/動畫3-1.mp4");
    video.final_b_2.hide();
    video.final_b_2.pause();
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


let startVideo_a = false;
let fiveSecond_a = false;
let startVideo_b_1 = false;
let fiveSecond_b_1 = false;
let startVideo_b_2 = false;
let fiveSecond_b_2 = false;

let page = 1;
let allText_1 = ["你知道你同事常常動你的手機嗎？我之前還常看到他在你家附近閒晃！", "……他在你後面！"];
let allText_2 = ["你知道你同事常常動你的手機嗎？我之前還常看到他在你家附近閒晃......", "等了這麼久，終於進到你家了......"];

let option = 2;

// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    if (page == 1) {
        if (option == 1) {
            imageMode(CENTER);
            image(img.A_1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
        }
        else if (option == 2) {
            if (!startVideo_b_1 && !fiveSecond_b_1) {
                video.final_b_1.time(0);
                video.final_b_1.loop();
                startVideo_b_1 = true;
                fiveSecond_b_1 = false;
            }
            // 繪製影片、檢查暫停的時間
            if (startVideo_b_1 || fiveSecond_b_1) {
                imageMode(CORNER);
                image(video.final_b_1, 0, 0, width, height);

                if (video.final_b_1.time() >= 5 && !fiveSecond_b_1) {
                    video.final_b_1.time(5);
                    video.final_b_1.pause();
                    fiveSecond_b_1 = true;
                    startVideo_b_1 = false;
                }
            }
        }

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
        image(img.A_2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        if (option == 1) {
            if (!startVideo_a && !fiveSecond_a) {
                video.final_a.time(0);
                video.final_a.loop();
                startVideo_a = true;
                fiveSecond_a = false;
            }
            // 繪製影片、檢查暫停的時間
            if (startVideo_a || fiveSecond_a) {
                imageMode(CORNER);
                image(video.final_a, 0, 0, width, height);

                if (video.final_a.time() >= 5 && !fiveSecond_a) {
                    video.final_a.time(5);
                    video.final_a.pause();
                    fiveSecond_a = true;
                    startVideo_a = false;
                }
            }
        }
        else if (option == 2) {
            if (!startVideo_b_2 && !fiveSecond_b_2) {
                video.final_b_2.time(0);
                video.final_b_2.loop();
                startVideo_b_2 = true;
                fiveSecond_b_2 = false;
            }
            // 繪製影片、檢查暫停的時間
            if (startVideo_b_2 || fiveSecond_b_2) {
                imageMode(CORNER);
                image(video.final_b_2, 0, 0, width, height);

                if (video.final_b_2.time() >= 5 && !fiveSecond_b_2) {
                    video.final_b_2.time(5);
                    video.final_b_2.pause();
                    fiveSecond_b_2 = true;
                    startVideo_b_2 = false;
                }
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

    if (option == 1) {
        typing(allText_1[page - 1], 100, 880, 30, 0, 0, 0, 0, 1, 10);
        if (currentText == allText_1[page - 1]) {
            if (mouseIsPressed || keyIsPressed && key == ' ') {
                if (page == 2 && fiveSecond_a && !startVideo_a) {
                    page++;
                }
                else {
                    page++;
                }
                currentText = "";
                i = 0;
            }
        }
    }
    else if (option == 2) {
        typing(allText_2[page - 1], 100, 880, 30, 0, 0, 0, 0, 1, 10);
        if (currentText == allText_2[page - 1]) {
            if (mouseIsPressed || keyIsPressed && key == ' ') {
                if (page == 1 && fiveSecond_b_1 && !startVideo_b_1) {
                    page++;
                }
                else if(page == 2 && fiveSecond_b_2 && !startVideo_b_2) {
                    page++;
                }
                currentText = "";
                i = 0;
            }
        }
    }


    if (fadeStatus == "none" && page > 2 && fiveSecond_b_2 && !startVideo_b_2) {
        fadeStatus = "out";
    }


    // if (mouseIsPressed && fadeStatus == "none") {
    //     fadeStatus = "out";
    // }
}