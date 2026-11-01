const playBtn = document.getElementById("playBtn");
const appimg = document.querySelector("#frame_image img");
const song = document.getElementById("song");
const plysong = document.getElementById("plysong");
const plynxt = document.getElementById("plynxt");
const plyprvs = document.getElementById("plyprvs");
const sidebtns = document.querySelectorAll(".ctrl-Btns")
const appname = document.querySelector(".app-name")
sidebtns.forEach((sidebtns) => {
    sidebtns.addEventListener("click", songChng);
});
playBtn.addEventListener("click", songSt);

function songSt() {
    if (playBtn.classList.contains("off")) {
        song.play();
        playBtn.classList.add("on");
        playBtn.classList.remove("off");
        appimg.src = "assets/memes/goon.gif";
        appname.textContent = "gooner.goon";
        plysong.src = "assets/Icons/play-pause.svg"
    } else {
        song.pause()
        playBtn.classList.add("off");
        playBtn.classList.remove("on")
        appimg.src = "assets/pfp/me.gif"
        appname.textContent = "Me.gif"
        plysong.src = "assets/Icons/play-button.svg"
    }

};
function songChng() {
    if (song.classList.contains("1st")) {
        song.src = "assets/music/alone.mp3";
        appimg.src = "assets/memes/eatchips.jpg"
        appname.textContent = "Chips.lol";
        song.play();
        song.classList.add("2nd");
        song.classList.remove("1st");
        plysong.src = "assets/Icons/play-pause.svg"


        if (playBtn.classList.contains("on")) {

        } else {
            playBtn.classList.add("on")
        }
    } else {
        song.src = "assets/music/Diet_mountain_dew.mp3";
        appimg.src = "assets/memes/goon.gif";
        appname.textContent = "gooner.goon";
        song.play();
        plysong.src = "assets/Icons/play-pause.svg";
        song.classList.add("1st");
        song.classList.remove("2nd");

        if (playBtn.classList.contains("on")) {

        } else {
            playBtn.classList.add("on")
        }
    }

}
