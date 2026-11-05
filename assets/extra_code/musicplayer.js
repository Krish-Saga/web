const playBtn = document.getElementById("playBtn");
const frame = document.getElementById("frame_image")
const msplayer = document.getElementsByClassName("musicplayer");
const appimg = document.querySelector("#frame_image img");
const song = document.getElementById("song");
const plysong = document.getElementById("plysong");
const plynxt = document.getElementById("plynxt");
const plyprvs = document.getElementById("plyprvs");
const sidebtns = document.querySelectorAll(".ctrl-Btns");
const appname = document.querySelector(".app-name");
const songtitle = document.getElementById("song-title");
const appvid = document.createElement("video")


async function songdata() {
    try {
        const response = await fetch("assets/playlist.json");
        const data = await response.json();
        return data;
    } catch (e) {

        console.error("Failed to fulfill my job (loading json)", e);

    }
}

sidebtns.forEach((sidebtns) => {
    sidebtns.addEventListener("click", songChng);
});

playBtn.addEventListener("click", async () => {
    const sdata = await songdata();
    songSt(sdata);
});

function songSt(songdata) {
    var index = 3;
    if (playBtn.classList.contains("off")) {
        songtitle.textContent = songdata.songs[index].title;
        song.src = encodeURI("assets/" + songdata.songs[index].audio);
        appimg.src = encodeURI("assets/gif/" + songdata.songs[index].gif);
        appname.textContent = songdata.songs[index].artist;
        song.play();
        playBtn.classList.replace("off", "on");
        plysong.src = "assets/Icons/play-pause.svg"
    } else {
        song.pause()
        playBtn.classList.replace("on", "off");
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

