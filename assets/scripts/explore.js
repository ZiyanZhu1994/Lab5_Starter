// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  var voices = synth.getVoices();
  var voice_list = document.querySelector('select');
  for (let i = 0; i < voices.length ; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + " (" + voices[i].lang + ')'; 
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voice_list.appendChild(option);
  }
  var button = document.querySelector('button');
  var text = document.querySelector('textarea');
  var img = document.querySelector('img');
  
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const utter = new SpeechSynthesisUtterance(text.value);
    const selected_name = voice_list.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selected_name) {
        utter.voice = voices[i];
      }
    }
    img.src = "assets/images/smiling-open.png";
    synth.speak(utter);
    utter.addEventListener('end', (event) => {
      img.src = "assets/images/smiling.png";
    });
    text.blur();
  });
  
  


}
