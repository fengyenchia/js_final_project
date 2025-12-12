// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let video = {};
let paperappeared = false;
let start;
let all = 120;
let messageStep = 0; // 0: 顯示紙條, 1: 顯示「這⋯⋯」, 2: 顯示選項


let sceneState = "waiting"; // waiting, playingVideo, show5_2, show5_3, show5_4, finished
let stepStartFrame = 0;
const IMAGE_DURATION = 60; // 每張圖顯示的時間（影格數），60fps 約 2 秒


function preload() {
    // 首張靜態畫面（動畫第一幀）
    img.coffee = loadImage("../assets/images/動畫1-1_第一楨.png");
    img.receivePaper = loadImage("../assets/images/1-17.png");
    img.smallbtn = loadImage("../assets/images/1-18.png");
    img.message_1 = loadImage("../assets/images/5-5.png");
    img.message = loadImage("../assets/images/message.png");
    img.option_1 = loadImage("../assets/images/5-6.png");
    img.option_2 = loadImage("../assets/images/5-7.png");
    // 後面要依序顯示的三張圖
    img.come1 = loadImage("../assets/images/5-2.png");
    img.come2 = loadImage("../assets/images/5-3.png");
    img.come3 = loadImage("../assets/images/5-4.png");
    img.paperbg = loadImage("../assets/images/1-2.png");


    // 影片（動畫一）
    video.coffee = createVideo("../assets/videos/動畫1-1.mp4");
    video.coffee.hide();   // 一開始先藏起來
    video.coffee.pause();  // 一開始先暫停
}


function setup() {
    createCanvas(1440, 1024);


    // 影片播完之後要做的事：進入顯示 5-2.png 的狀態
    video.coffee.onended(() => {
        video.coffee.hide(); // 影片播完就藏起來
        sceneState = "show5_2";
        stepStartFrame = frameCount;
    });
}


function draw() {
    background(100);
    if (fadeStatus == "none") {
        gameContent();
    }
    // 保持你原本的場景轉場方式
    fadeInOut("/06");
}
let startVideo = false;
let fiveSecond = false;
let receivePaper = false;
let messageEnd = false;
// -----------------------------------------
// 將遊戲內容放在 gameContent() 裡
function gameContent() {
    imageMode(CENTER);

    // 等待玩家按空白鍵的畫面：顯示動畫第一幀
    if (sceneState === "waiting") {
        console.log("waiting");
        image(img.coffee, width / 2, height / 2, 1440, 1024);
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);
        text('剛上班，先來泡杯咖啡吧！', 100, 870);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>按空白鍵繼續', 1360, 940);

    }


    // 播放動畫一（影片）
    else if (sceneState === "playingVideo") {
        console.log("playingVideo");
        imageMode(CORNER);
        video.coffee.hide();
        image(video.coffee, 0, 0, width, height);
    }

    // 影片播完後，依序顯示 5-2、5-3、5-4
    else if (sceneState === "show5_2") {
        console.log("show5_2");
        imageMode(CENTER);
        image(img.come1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);


        if (frameCount - stepStartFrame > IMAGE_DURATION) {
            sceneState = "show5_3";
            stepStartFrame = frameCount;
        }
    }
    else if (sceneState === "show5_3") {
        console.log("show5_3");
        imageMode(CENTER);
        image(img.come2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);


        if (frameCount - stepStartFrame > IMAGE_DURATION) {
            sceneState = "show5_4";
            stepStartFrame = frameCount;
        }
    }
    else if (sceneState === "show5_4") {
        console.log("show5_4");
        imageMode(CENTER);
        image(img.come3, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);


        if (frameCount - stepStartFrame > IMAGE_DURATION) {
            sceneState = "paper";
            paperappeared = true;
            stepStartFrame = frameCount;
        }
    }
    // 紙條
    if (sceneState === "paper" && paperappeared) {
        console.log("paper");
        imageMode(CENTER);
        image(img.paperbg, width / 2, height / 2, 1440, 1024);
        image(img.receivePaper, 140, (height - height / 4) * 1 / 5);


        if (!receivePaper) {
            image(img.smallbtn, 210, 80 + (height - height / 4) * 1 / 5);
            console.log("draw smallbtn");
        } else {
            imageMode(CORNER);
            image(img.smallbtn, -300, 80 + (height - height / 4) * 1 / 5);
        }

        // 玩家已經點了紙條
        if (receivePaper) {
            // --------- Step 0：顯示紙條內容（message_1）---------
            if (messageStep === 0) {
                if (paper == 1 || paper == 2 || paper == 3) {
                    imageMode(CENTER);
                    image(img.message_1, 661, 459);
                }

                // 顯示 all（180 frame ≈ 3 秒）後進入下一階段
                if (frameCount - start > all) {
                    messageStep = 1;
                    start = frameCount; // 重新計時給下一段用
                }
            }

            // --------- Step 1：顯示「這⋯⋯」對話 ---------
            else if (messageStep === 1) {
                imageMode(CENTER);
                image(img.message, width / 2, height - 150);
                image(img.message_1, 661, 459);

                textAlign(LEFT);
                textSize(32);
                fill(255);
                text('林芷安', 100, 820);
                text('這···', 100, 870);

                // 「文字輸入完後」這邊我用時間來代表完成
                if (frameCount - start > all) { // 再等 3 秒
                    messageStep = 2;
                }
            }
            // --------- Step 2：顯示選項 option_1 / option_2 ---------
            else if (messageStep === 2) {
                imageMode(CENTER);
                image(img.message_1, 661, 459);
                // 你可以決定要不要保留 message 對話框 + 文字
                // 這裡先只顯示兩個選項按鈕
                image(img.option_1, width / 2, height - 330);
                image(img.option_2, width / 2, height - 150);

                // 選項 1 點擊範圍
                if (mouseIsPressed &&
                    mouseX >= width / 2 - 519 && mouseX <= width / 2 + 519 &&
                    mouseY >= (height - 330) - 85 && mouseY <= (height - 330) + 85) {

                    if (fadeStatus === "none") {
                        option = 1; // 若你有在別關使用 option，就保留
                        localStorage.setItem('option', option);
                        fadeStatus = "out";  // ✅ 觸發轉場，利用 fadeInOut("/06") 跳第六關
                    }
                }

                // 選項 2 點擊範圍
                if (mouseIsPressed &&
                    mouseX >= width / 2 - 519 && mouseX <= width / 2 + 519 &&
                    mouseY >= (height - 150) - 85 && mouseY <= (height - 150) + 85) {
                    if (fadeStatus === "none") {
                        option = 2;
                        localStorage.setItem('option', option);
                        fadeStatus = "out";  // ✅ 同樣跳第六關
                    }
                }
            }
        }
    }



}

function keyPressed() {
    if (key === ' ' && sceneState === "waiting" && fadeStatus === "none") {
        // 開始播放影片
        sceneState = "playingVideo";
        video.coffee.time(0);
        video.coffee.show();
        video.coffee.play();
    }
}


function mouseClicked() {
    if (mouseX > 145 && mouseX < 275 && mouseY > 210 && mouseY < 250) {
        receivePaper = true;
        paper = floor(random(1, 4));
        console.log(paper);
        start = frameCount;
        messageStep = 0;
    }
}