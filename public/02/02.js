// fadeStatus 是從 fadeInOut.js 引入的全域變數

let img = {};
let sound = {};
// let video = {};
let page = 1;
// ====== 打字機效果用變數 ======
let fullText = "";
let typingIndex = 0;
let typingSpeed = 5;
let useTypingEffect = false;

let soundTrigger = false;

function preload() {
    img.bg1 = loadImage("../assets/images/2-1.png");
    img.bg2 = loadImage("../assets/images/2-2.png");
    img.bg3 = loadImage("../assets/images/2-3.png");
    img.bg4 = loadImage("../assets/images/2-4.png");
    img.bg5 = loadImage("../assets/images/2-5.png");
    img.bg6 = loadImage("../assets/images/2-6.png");
    img.bg7 = loadImage("../assets/images/2-7.png");
    img.message = loadImage("../assets/images/message.png");
    img.messagesmall = loadImage("../assets/images/messagesmall.png");
    img.arrow = loadImage("../assets/images/arrow.png");
    img.bt = loadImage("../assets/images/bt.png");

    soundFormats('mp3');
    sound.open = loadSound("../assets/sounds/開門.mp3");
    sound.close = loadSound("../assets/sounds/關門.mp3");
    sound.ring = loadSound("../assets/sounds/通知聲.mp3");
    sound.typing = loadSound("../assets/sounds/手機打字.mp3");

    //     video.a = createVideo("");
}

function setup() {
    createCanvas(1440, 1024);
}

function draw() {
    background(100);
    if (fadeStatus == "in") {
    }
    if (fadeStatus == "none") {
        if (sound.open.isLoaded() && soundTrigger == false) {
            sound.open.play();
            soundTrigger = true;
        }
        gameContent();
    }

    fadeInOut("/03");

}

function drawTypingText(x, y) {
    if (typingIndex < fullText.length) {
        if (frameCount % typingSpeed === 0) {
            currentText += fullText.charAt(typingIndex);
            typingIndex++;
        }
    }
    text(currentText, x, y);
}

function resetTyping(text) {
    fullText = text;
    currentText = "";   // 使用你原本的變數，不重宣告
    typingIndex = 0;
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


        if (!useTypingEffect) {
            resetTyping("終於下班回到家了！來放鬆一下吧！");
            useTypingEffect = true;
        }

        drawTypingText(100, 880);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);

    }
    else if (page === 2) {
        imageMode(CENTER);
        image(img.bg2, width / 2, height / 3, 1024 * 1.5, 1024 * 1.5);


        image(img.messagesmall, width - 400, height / 3);
        image(img.arrow, 755, 430);

        // 第二頁的對話框與文字
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('點點看手機，社群上有什麼訊息呢？', 790, 350);

    }
    else if (page === 3) {
        imageMode(CENTER);
        image(img.bg3, width / 2, height / 3, 1024 * 1.5, 1024 * 1.5);

        image(img.messagesmall, width - 400, height / 3);
        image(img.arrow, 755, 430);

        // 第二頁的對話框與文字
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('有人追蹤我？！點進去看看是誰吧！', 790, 350);

    }
    else if (page === 4) {
        imageMode(CENTER);
        image(img.bg4, width / 2, height / 3, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);

        if (!useTypingEffect) {
            resetTyping("完全不認識耶......他還傳了訊息給我？");
            useTypingEffect = true;
        }

        drawTypingText(100, 880);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 5) {
        imageMode(CENTER);
        image(img.bg4, width / 2, height / 3, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('陌生訊息', 100, 820);


        if (!useTypingEffect) {
            resetTyping("找到你的 IG 了，以後常去探班～」");
            useTypingEffect = true;
        }

        drawTypingText(100, 880);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 6) {
        imageMode(CENTER);
        image(img.bg4, width / 2, height / 3, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.message, width / 2, height - 150);

        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('XXX', 100, 820);


        if (!useTypingEffect) {
            resetTyping("嗯......該怎麼做好呢？");
            useTypingEffect = true;
        }

        drawTypingText(100, 880);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
    else if (page === 7) {
        imageMode(CENTER);
        image(img.bg5, width / 2, height / 3.3, 1024 * 1.41, 1024 * 1.41);

        // 第二頁的對話框與文字
        image(img.bt, width / 2, 670); //A
        image(img.bt, width / 2, height - 150);//B

        textAlign(CENTER);
        textSize(48);
        fill(255);
        text('A.點進追蹤者主頁封鎖他', width / 2, 680);
        text('B.在聊天室打字回覆「你怎麼找到我的」', width / 2, 880);


    }
    else if (page === 8) {
        imageMode(CENTER);
        image(img.bg6, width / 2, height / 2.1, 1024 * 1.41, 1024 * 1.41);
        imageMode(CENTER);
        image(img.message, width / 2, height - 150);
        //對話框
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        if (!useTypingEffect) {
            resetTyping("他回了我一張照片......這是我吧？！昨天？");
            useTypingEffect = true;
        }


        drawTypingText(100, 880);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);




    }
    else if (page === 9) {
        imageMode(CENTER);
        image(img.bg7, width / 2, height / 2.3, 1024 * 1.41, 1024 * 1.41);
        image(img.message, width / 2, height - 150);


        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        // ★ 只在第一次進到這一頁時重置打字效果
        if (!useTypingEffect) {
            resetTyping("和我昨天晚上下班回家時發在限時動態的街景照角度一模一樣！到底是誰？！");
            useTypingEffect = true;
        }


        drawTypingText(100, 880);


        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }


    else if (page === 10) {
        imageMode(CENTER);
        image(img.bg7, width / 2, height / 2.3, 1024 * 1.41, 1024 * 1.41);
        imageMode(CENTER);
        image(img.message, width / 2, height - 150);
        //對話框
        textAlign(LEFT);
        textSize(32);
        fill(255);
        text('ＸＸＸ', 100, 820);


        if (!useTypingEffect) {
            resetTyping("Ｘ!好噁，先去洗個澡冷靜一下好了。");
            useTypingEffect = true;
        }


        drawTypingText(100, 880);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        text('>>點擊或按空白鍵繼續', 1360, 940);
    }
}
// ============== 互動控制區 ==============
function mousePressed() {
    if (fadeStatus !== "none") return;

    // ========== Page 7 的 A / B 選項 ==========
    if (page === 7) {

        // 假定按鈕尺寸（可調整）
        let bw = 1000;
        let bh = 150;

        // A 按鈕位置
        let ax = width / 2;
        let ay = 670;

        // B 按鈕位置
        let bx = width / 2;
        let by = height - 150;

        // ---- 檢查是否點到 A ----
        if (mouseX > ax - bw / 2 && mouseX < ax + bw / 2 &&
            mouseY > ay - bh / 2 && mouseY < ay + bh / 2) {

            // A：直接結束 → 進入 03.js
            fadeStatus = "out";   // fadeInOut("/03") 會自動處理跳轉
            return;
        }

        // ---- 檢查是否點到 B ----
        if (mouseX > bx - bw / 2 && mouseX < bx + bw / 2 &&
            mouseY > by - bh / 2 && mouseY < by + bh / 2) {
            if (sound.typing.isLoaded()) {
                sound.typing.play();
            }
            // B：繼續劇情 → page 8
            page = 8;

            return;
        }

        return; // Page 7 不需要其它點擊反應
    }
    if(page==8){
        sound.typing.pause();
    }
    // ================= 既有的邏輯 =================

    // Page 1
    if (page === 1) {
        page = 2;
    }
    // Page 2 / 3 點特定矩形才前進
    else if (page === 2 || page === 3) {
        if (page === 2) {
            if (sound.ring.isLoaded()) {
                sound.ring.play();
            }
        }
        let rectWidth = 180;
        let targetY_start = 500;
        let targetY_end = height - 210;
        let centerX = 740;

        let targetX_start = centerX - rectWidth / 2;
        let targetX_end = centerX + rectWidth / 2;

        if (mouseX > targetX_start && mouseX < targetX_end &&
            mouseY > targetY_start && mouseY < targetY_end) {
            page++;
        }
    }
    // page 4~6：點擊就下一頁
    else if (page >= 4 && page <= 6) {
        page++;
    }
    // Page 8~10：結束後進入 03.js
    else if (page >= 8 && page <= 10) {
        if (page === 10) {
            fadeStatus = "out"; // 最後一頁 → 進入 03.js
        } else {
            page++;
        }
    }
    useTypingEffect = false;


}

// 2. 鍵盤按鍵觸發
function keyPressed() {
    if (fadeStatus !== "none") return;

    // 只使用空白鍵
    if (key !== ' ') return;

    // ------------------------
    // Page 1：空白鍵 → 下一頁
    // ------------------------
    if (page === 1) {
        page = 2;
        return;
    }
    // ------------------------
    // Page 2 & 3：空白鍵無效果（因為需要點手機）
    // ------------------------
    if (page === 2 || page === 3) {
        return; // 空白鍵不前進
    }
    // ------------------------
    // Page 4 ~ 6：空白鍵 → 下一頁
    // ------------------------
    if (page >= 4 && page <= 6) {
        page++;
        return;
    }
    // ------------------------
    // Page 7：空白鍵無作用（避免亂跳過選項）
    // ------------------------
    if (page === 7) {
        return; // 強制只能靠滑鼠選擇 A/B
    }
    // ------------------------
    // Page 8 ~ 9：空白鍵 → 下一頁
    // ------------------------
    if (page === 8 || page === 9) {
        page++;
        return;
    }

    // ------------------------
    // Page 10：空白鍵 → 結束 → 進入 03.js
    // ------------------------
    if (page === 10) {
        fadeStatus = "out"; // fadeInOut("/03") 自動跳頁
        return;
    }
    useTypingEffect = false;
}