// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
let video = {};
let page = 1;
let allText = ["誒......自從上次的怪事後，最近上班心裡都毛毛的。", "來搜尋一下如何防跟蹤和自保好了！", " ", " ",
    "電腦怎麼自己動了！是誰在操控我的電腦？！"];


function preload() {
    img.bg1 = loadImage("../assets/images/4-1.png");
    img.bg2 = loadImage("../assets/images/4-2.png");
    img.bg3 = loadImage("../assets/images/4-3.png");
    img.message = loadImage("../assets/images/message.png");


    soundFormats('mp3');
    sound.open = loadSound("../assets/sounds/開門.mp3");
    sound.light = loadSound("../assets/sounds/開燈.mp3");
    sound.footsteps = loadSound("../assets/sounds/腳步聲.mp3");
    sound.computer = loadSound("../assets/sounds/電腦打字.mp3");


    video.vd1 = createVideo("../assets/videos/動畫4-1.mp4");
    video.vd1.hide();
    video.vd1.pause();
    video.vd2 = createVideo("../assets/videos/動畫4-2.mp4");
    video.vd2.hide();
    video.vd2.pause();
}


function setup() {
    createCanvas(1440, 1024);
}


function draw() {
    background(100);


    if (fadeStatus == "none") {
        if (sound.open.isLoaded() && soundTrigger == false) {
            sound.open.play();
        }
        if (sound.light.isLoaded() && soundTrigger == false) {
            sound.light.play();
            soundTrigger = true;
        }
        gameContent();
    }


    fadeInOut("/05");
}


let startVideo_1 = false;
let fiveSecond_1 = false;
let startVideo_2 = false;
let fiveSecond_2 = false;

let autoplayBlocked = false;
let showPlayHint = false;


// 新增：page 3 的狀態變數
let page3Input = null;
let page3HintText = true;
let page3StartAutoEnter = false;
let page4TypingIndex = 0;

let wait5second = 0;

let soundTrigger = false;
let soundTrigger_2 = false;

function gameContent() {
    if (page == 1) {
        // imageMode(CENTER);
        // image(img.bg1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);


        // 繪製影片、檢查是否到 7 秒並暫停            
        if (!startVideo_1 && !fiveSecond_1) {
            video.vd1.time(0);
            video.vd1.loop();
            startVideo_1 = true;
            fiveSecond_1 = false;
        }
        // 繪製影片、檢查暫停的時間
        if (startVideo_1 || fiveSecond_1) {
            imageMode(CORNER);
            image(video.vd1, 0, 0, width, height);

            if (video.vd1.time() >= 7 && !fiveSecond_1) {
                video.vd1.time(7);
                video.vd1.pause();
                fiveSecond_1 = true;
                startVideo_1 = false;
            }
        }
        imageMode(CENTER);
        image(img.message, width / 2, height - 150);
        //對話框
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('林芷安', 100, 820);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }

    else if (page == 2) {
        imageMode(CENTER);
        image(img.bg2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
        if (!startVideo_2 && !fiveSecond_2) {
            video.vd2.time(0);
            video.vd2.loop();
            startVideo_2 = true;
            fiveSecond_2 = false;
        }
        // 繪製影片、檢查暫停的時間
        if (startVideo_2 || fiveSecond_2) {
            imageMode(CORNER);
            image(video.vd2, 0, 0, width, height);

            if (video.vd2.time() >= 7 && !fiveSecond_2) {
                video.vd2.time(7);
                video.vd2.pause();
                fiveSecond_2 = true;
                startVideo_2 = false;
            }
        }

        imageMode(CENTER);
        image(img.message, width / 2, height - 150);
        //對話框
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('林芷安', 100, 820);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 3) {
        imageMode(CENTER);
        image(img.bg3, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 只在第一次進入 page 3 時建立輸入框
        if (page3Input === null) {
            page3Input = createInput();
            page3Input.size(500, 100);
            page3Input.position(width / 2 - 230, height / 2 + 45);
            page3Input.style('font-size', '64px');
        }
        // 顯示提示文字
        if (page3HintText) {
            fill(0);
            textSize(32);
            textAlign(CENTER);
            text("（請輸入：防跟蹤 求助方式）", width / 2, height / 2 - 20);
        }

        // 檢查輸入
        if (page3Input) {
            let inputValue = page3Input.value();
            if (inputValue.length === 8) {
                page3Input.value('');
                page = 4;
                page3HintText = false;
                page3StartAutoEnter = true;
                wait5second = frameCount;
            }
        }
    }
    // page4
    else if (page === 4) {
        // 清除 page3 的輸入框（若存在）
        if (page3Input !== null) {
            page3Input.remove();
            page3Input = null;
            wait5second = frameCount;
        }
        imageMode(CENTER);
        image(img.bg3, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
        noCursor();


        // 畫輸入框外框（視覺效果）
        noFill();
        stroke(0);
        strokeWeight(2);
        rect(width / 2 - 230, height / 2 + 45, 500, 100);

        myColor = "black";
        typing('為什麼？', width / 2 - 200, height / 2 + 120, 64, 0, 0, 0, 0, 1, 25);
    }

    // page5
    else if (page === 5) {

        imageMode(CENTER);
        image(img.bg3, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
        noCursor();


        // 畫輸入框外框（視覺效果）
        noFill();
        stroke(0);
        strokeWeight(2);
        rect(width / 2 - 230, height / 2 + 45, 500, 100);
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('林芷安', 100, 820);


        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
        noCursor();
    }

    if (page != 4 && allText[page - 1] != "為什麼？") { // 確保不是 Page 4
        typing(allText[page - 1], 100, 880, 30, 0, 0, 0, 0, 0, 10);
    }

    if (currentText == allText[page - 1]) {
        if (mouseIsPressed && page != 3 || (keyIsPressed && key == ' ') && page != 3) {
            page++;
            currentText = "";
            i = 0;
        }
        else if (mouseIsPressed && page == 3 || (keyIsPressed && key == ' ') && page == 3) {
            if (sound.computer.isLoaded() && soundTrigger_2 == false) {
                sound.computer.play();
                soundTrigger_2 = true;
            }
        }
    }
    if (page == 4) {
        if (frameCount - wait5second > 150) {
            page = 5;
        }
    }

    if (fadeStatus == "none" && page > 5) {
        fadeStatus = "out";
    }
}