const textArea=document.getElementById("textarea");
const speechBtn=document.getElementById("btn");
const selectVoice=document.getElementById("select");

// function voices(){
//     speechSynthesis.getVoices().forEach(function(voice) {
//         console.log(voice.name, voice.default ? voice.default :'');
//       });

// }

function textToSpeech(text){
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
}

speechBtn.addEventListener("click", speak =>{
    textToSpeech(textArea.value);
});

selectVoice.addEventListener("change",)