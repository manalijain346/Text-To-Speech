const textArea = document.getElementById("textarea");
const speechBtn = document.getElementById("btn");
speechBtn.disabled = true;

function textToSpeech(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

textArea.addEventListener("keydown", speak => {
    if (textArea.value.length != 0) {
        speechBtn.disabled = false;
    } else {
        speechBtn.disabled = true;
    }

});

speechBtn.addEventListener("click", speak => {
    textToSpeech(textArea.value);
});