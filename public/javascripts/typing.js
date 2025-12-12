let myInput;


let startAutoEnterText = false;
let currentText = "";
let i = 0;
let speed = 0;
let myColor ="";

function typing(typingText, textX, textY, mytextSize, baseLinePosX, baseLinePosY, baseLineWidth, baseLineHeight, myStrokeWeight, speed=25) {
    startAutoEnterText = true;


    if (startAutoEnterText == true) {
        if (i <= typingText.length && frameCount % speed == 0) { // 每隔 speed 幀執行一次
            currentText = typingText.substring(0, i);
            i++;
        }
        if(myColor === "black"){
            textSize(mytextSize);
        fill(0);
        strokeWeight(myStrokeWeight);
        stroke(0);
        textAlign(LEFT);
        text(currentText, textX, textY);
        myColor = 0;
       
        }
        else{
        textSize(mytextSize);
        fill(255);
        strokeWeight(myStrokeWeight);
        stroke(255);
        textAlign(LEFT);
        }
        text(currentText, textX, textY);
        if (frameCount % 50 < 25) {
            rect(baseLinePosX + textWidth(currentText), baseLinePosY, baseLineWidth, baseLineHeight);
        }
    }
}

