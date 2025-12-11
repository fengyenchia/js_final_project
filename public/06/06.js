// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};

function preload() {
    img.bg_1 = loadImage("../assets/images/6-1.png");
    img.bg_2 = loadImage("../assets/images/6-2.png");
    img.bg_3 = loadImage("../assets/images/6-3.png");
    img.bg_4 = loadImage("../assets/images/6-4.png");
    img.option_1 = loadImage("../assets/images/6-5.png");
    img.option_2 = loadImage("../assets/images/6-6.png");

    img.message = loadImage("../assets/images/message.png");

    soundFormats('mp3');
    sound.foot = loadSound("../assets/sounds/腳步聲.mp3");
    sound.open = loadSound("../assets/sounds/開門.mp3");
    sound.close = loadSound("../assets/sounds/關門.mp3");
    sound.lock = loadSound("../assets/sounds/鎖門.mp3");
    sound.door = loadSound("../assets/sounds/捶門1.mp3");

    video.run = createVideo("../assets/videos/動畫3-1.mp4");
    video.run.hide();
    video.run.pause();
    video.hand = createVideo("../assets/videos/動畫1-1.mp4");
    video.hand.hide();
    video.hand.pause();
}

function setup() {
    createCanvas(1440, 1024);
}

function draw() {
    background(100);

    if (fadeStatus == "none") {
        if (sound.foot.isLoaded() && soundTrigger == false && page == 1) {
            sound.foot.play();
            soundTrigger = true;
        }
        else if (page == 2) {
            sound.foot.pause();
        }
        gameContent();
    }

    fadeInOut("/07");
}


let startVideo_run = false;
let fiveSecond_run = false;
let startVideo_hand = false;
let fiveSecond_hand = false;

let page = 1;
let allText_1 = ["請等一下，我有話一定要告訴你！", "你是誰！不要靠近我！"];
let allText_2 = ["對不起！我不是壞人！我…我有事一定要跟你說！請你趕快開門！", " "];

let stage = 1;
let option = 1;

let soundTrigger = false;
// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    if (page == 1 && stage == 1) {
        imageMode(CENTER);
        image(img.bg_1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        if (!startVideo_run && !fiveSecond_run) {
            video.run.time(0);
            video.run.loop();
            startVideo_run = true;
            fiveSecond_run = false;
        }
        // 繪製影片、檢查暫停的時間
        if (startVideo_run || fiveSecond_run) {
            imageMode(CORNER);
            image(video.run, 0, 0, width, height);

            if (video.run.time() >= 5 && !fiveSecond_run) {
                video.run.time(5);
                video.run.pause();
                fiveSecond_run = true;
                startVideo_run = false;
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
        console.log(page, stage);
    }
    else if (page == 2 && stage == 1) {
        imageMode(CENTER);
        image(img.bg_2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        if (!startVideo_hand && !fiveSecond_hand) {
            video.hand.time(0);
            video.hand.loop();
            startVideo_hand = true;
            fiveSecond_hand = false;
        }
        // 繪製影片、檢查暫停的時間
        if (startVideo_hand || fiveSecond_hand) {
            imageMode(CORNER);
            image(video.hand, 0, 0, width, height);

            if (video.hand.time() >= 5 && !fiveSecond_hand) {
                video.hand.time(5);
                video.hand.pause();
                fiveSecond_hand = true;
                startVideo_hand = false;

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

        console.log(page, stage);
    }

    if (page == 1 && stage == 2) {
        imageMode(CENTER);
        image(img.bg_4, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

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
        console.log(page, stage);
    }
    else if (page == 2 && stage == 2) {
        imageMode(CENTER);
        image(img.bg_4, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        image(img.option_1, width / 2, height - 330);
        image(img.option_2, width / 2, height - 150);

        if (mouseIsPressed && mouseX >= width / 2 - 519 && mouseX <= width / 2 + 519 && mouseY >= height - 330 - 85 && mouseY <= height - 330 + 85) {
            if (fadeStatus == "none") {
                option = 1;
                localStorage.setItem('option', option); // 儲存變數到 localStorage
                fadeStatus = "out";
            }
        }
        if (mouseIsPressed && mouseX >= width / 2 - 519 && mouseX <= width / 2 + 519 && mouseY >= height - 150 - 85 && mouseY <= height - 150 + 85) {
            if (fadeStatus == "none") {
                option = 2
                localStorage.setItem('option', option); // 儲存變數到 localStorage
                fadeStatus = "out";
            }
        }
        console.log(page, stage);
    }




    // -----------------------------------------

    if (stage == 1) {
        typing(allText_1[page - 1], 100, 880, 30, 0, 0, 0, 0, 1, 10);
        if (currentText == allText_1[page - 1]) {
            if (mouseIsPressed || keyIsPressed && key == ' ') {
                if (page == 1 && fiveSecond_run && !startVideo_run) {
                    page++;
                }
                else if (page == 2 && fiveSecond_hand && !startVideo_hand) {
                    page++;
                    fadeStatus = "outNotJump";
                    if (sound.open.isLoaded()) {
                        sound.open.play();
                    }
                    if (sound.close.isLoaded()) {
                        sound.close.play();
                    }
                    // if (sound.lock.isLoaded()) {
                    //     sound.lock.play();
                    // }
                    stage = 2;
                    page = 1;
                }
                currentText = "";
                i = 0;
            }
        }
    }
    else if (stage == 2) {
        typing(allText_2[page - 1], 100, 880, 30, 0, 0, 0, 0, 1, 10);
        if (currentText == allText_2[page - 1]) {
            if (page == 1 && (mouseIsPressed || keyIsPressed && key == ' ')) {
                if (sound.door.isLoaded()) {
                    sound.door.play();
                }
                if (page == 1) {
                    page++;
                    currentText = "";
                    i = 0;
                }
            }
        }
    }

}