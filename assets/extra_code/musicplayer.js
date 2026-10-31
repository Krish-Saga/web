const playBtn = document.getElementById("playBtn");
const appimg = document.querySelector("#frame_image img");
const song = document.getElementById("song");
const plysong = document.getElementById("plysong");
const plynxt = document.getElementById("plynxt");
const plyprvs = document.getElementById("plyprvs");
playBtn.addEventListener("click", songSt);

function songSt() {
    if (playBtn.classList.contains("off")) {
        song.play();
        playBtn.classList.add("on");
        playBtn.classList.remove("off");
        appimg.src = "assets/memes/onepunchman.gif";
        plysong.src = "assets/Icons/play-pause.svg"
    } else {
        song.pause()
        playBtn.classList.add("off");
        playBtn.classList.remove("on")
        appimg.src = "assets/pfp/me.gif"
        plysong.src = "assets/Icons/play-button.svg"
    }

}
