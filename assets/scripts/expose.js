// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const confetti = new JSConfetti();
  var img = document.querySelector('img[src="assets/images/no-image.png"]');
  var h_list = document.getElementById("horn-select");
  var audio = document.querySelector("audio");
  var audio_vol = document.getElementById("volume");
  var audio_volIcon = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  var b = document.querySelector("button");

  audio_vol.addEventListener("input", (event) => {
    var vol = event.target.value;
    audio_vol.volume = vol / 100.0;
    let vol_int = parseInt(vol)
    if (vol_int === 0) {
      audio_volIcon.src = "assets/icons/volume-level-0.svg";
    } else if (1<=vol_int && vol_int<33) {
      audio_volIcon.src = "assets/icons/volume-level-1.svg";
    } else if (33<=vol_int&& vol_int<67) {
      audio_volIcon.src = "assets/icons/volume-level-2.svg";
    } else if (vol_int>=67) {
      audio_volIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  h_list.addEventListener("input", (event) => {
    let name =  event.target.value
    img.src = 'assets/images/' + name + '.svg';
    audio.src = 'assets/audio/' + name + '.mp3';
  });

  b.addEventListener("click", () => {
    if (h_list.value !== "select") {
      audio.play();
      if (h_list.value === "party-horn") {
        confetti.addConfetti();
      }
    }
  });

}
