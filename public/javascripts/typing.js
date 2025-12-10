let startAutoEnterText = false;
let currentText = "";
let i = 0;
let speed = 0;

function typing(typingText, textX, textY, mytextSize, baseLinePosX, baseLinePosY, baseLineWidth, baseLineHeight, myStrokeWeight, speed=25) {
	startAutoEnterText = true;

	if (startAutoEnterText == true) {
		if (i <= typingText.length && frameCount % speed == 0) { // 每隔 speed 幀執行一次
			currentText = typingText.substring(0, i);
			i++;
		}
		textSize(mytextSize);
		fill(255);
        strokeWeight(myStrokeWeight);
        stroke(255);
        textAlign(LEFT);
        // let textX = (width-textWidth(typingText))/2;
		text(currentText, textX, textY);
		if (frameCount % 50 < 25) {
			rect(baseLinePosX + textWidth(currentText), baseLinePosY, baseLineWidth, baseLineHeight);
		}
	}
}