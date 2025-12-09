let myInput;

let startAutoEnterText = false;
let currentText = "";
let i = 0;
let speed = 25;

function typing(typingText, mytextSize, baseLinePos, baseLineWidth, baseLineHeight) {
	startAutoEnterText = true;

	if (startAutoEnterText == true) {
		if (i <= typingText.length && frameCount % speed == 0) { // 每隔 speed 幀執行一次
			currentText = typingText.substring(0, i);
			i++;
		}
		textSize(mytextSize);
		fill(255);
        strokeWeight(2);
        stroke(255);
        textAlign(LEFT);
        let textX = (width-textWidth(typingText))/2;
		text(currentText, textX, height/2);
		if (frameCount % 50 < 25) {
			rect(baseLinePos + textWidth(currentText), height/2, baseLineWidth, baseLineHeight);
		}
	}
}