const playBtn = document.getElementById("playBtn");

const song = document.getElementById("song");
playBtn.addEventListener("click", songSt);

function songSt() {
    song.play()
}
