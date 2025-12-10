// // fadeStatus 是從 fadeInOut.js 引入的全域變數

// let img = {};
// let sound = {};
// let video = {};

// // function preload() {
// //     img.a = loadImage("");

// //     soundFormats('mp3');
// //     sound.a = loadSound("");;

// //     video.a = createVideo("");
// // }

// function setup() {
//     createCanvas(1440, 1024);
// }

// function draw() {
//     background(100);

//     if (fadeStatus == "none") {
//         gameContent();
//     }

//     fadeInOut("/03");
// }

// // -----------------------------------------
// // 將遊戲內容放在gameContent()裡
// function gameContent() {
//     fill(255);
//     stroke(0);
//     circle(width/2, height/2, 200);


//     if (mouseIsPressed && fadeStatus == "none") {
//         fadeStatus = "out";
//     }
// }

// fadeStatus 是從 fadeInOut.js 引入的全域變數


let img = {};
// let sound = {};
// let video = {};
let page = 1;
let allText = ["終於下班回到家了！來放鬆一下吧！", "終於下班回到家了！來放鬆一下吧！", "終於下班回到家了！來放鬆一下吧！", "終於下班回到家了！來放鬆一下吧！", "終於下班回到家了！來放鬆一下吧！", "終於下班回到家了！來放鬆一下吧！", "終於下班回到家了！來放鬆一下吧！"];

function preload() {
    img.bg1 = loadImage("../assets/images/2-1.png");
    img.bg2 = loadImage("../assets/images/2-2.png");
    img.bg3 = loadImage("../assets/images/2-3.png");
    img.bg4 = loadImage("../assets/images/2-4.png");
    img.bg5 = loadImage("../assets/images/2-5.png");
    img.bg6 = loadImage("../assets/images/2-6.png");
    img.bg7 = loadImage("../assets/images/2-7.png");
    img.message = loadImage("../assets/images/message.png");
    //     soundFormats('mp3');
    //     sound.a = loadSound("");;


    //     video.a = createVideo("");
}


function setup() {
    createCanvas(1440, 1024);
}


function draw() {
    background(100);


    if (fadeStatus == "none") {
        gameContent();
    }


    fadeInOut("/03");
}


// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    // ============== 第一頁 ==============
    if (page === 1) {
        imageMode(CENTER);
        image(img.bg1, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);
        imageMode(CENTER);
        image(img.message, width / 2, height - 150);
        //對話框
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);

        // if (mouseIsPressed && fadeStatus == "none") {
        //  fadeStatus = "out";
        // }
    }
    else if (page === 2) {
        imageMode(CENTER);

        // 這裡放第二頁的背景 (記得在 preload 載入 img.bg2)
        // 如果還沒準備好第二張圖，先用 img.bg 代替測試
        image(img.bg2, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 3) {
        imageMode(CENTER);
        image(img.bg3, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 4) {
        imageMode(CENTER);
        image(img.bg4, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 5) {
        imageMode(CENTER);
        image(img.bg5, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 6) {
        imageMode(CENTER);
        image(img.bg6, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 7) {
        imageMode(CENTER);
        image(img.bg7, width / 2, height / 2, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // textAlign(LEFT);
        // textSize(32);
        // fill(255);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    switch (page) {
        case 1:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
        case 2:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
        case 3:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
        case 4:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
        case 5:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
        case 6:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
        case 7:
            typing("終於下班回到家了！來放鬆一下吧！", 100, 880, 30, 0, 0, 0, 0, 1, 10);
            break;
    }
}
// ============== 互動控制區 ==============


// 1. 滑鼠點擊觸發
function mousePressed() {
    // 每次點擊，頁數加 1
    page = page + 1;

    // 選用：如果想循環回到第一頁，可以加這行
    // if (page > 2) { page = 1; }
}


// 2. 鍵盤按鍵觸發
function keyPressed() {
    // 檢查是否按下空白鍵 (' ')
    if (key === ' ') {
        page = page + 1;
    }
}
