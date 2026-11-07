const playBtn = document.getElementById("playBtn");
const frame = document.getElementById("frame_image")
const msplayer = document.getElementsByClassName("musicplayer");
const appimg = document.querySelector("#frame_image img");
const song = document.getElementById("song");
const plysong = document.querySelector("#playBtn img");
const playNext = document.getElementById("playNext");
const playPrvs = document.getElementById("playPrvs");
const sidebtns = document.querySelectorAll(".ctrl-Btns");
const appname = document.querySelector(".app-name");
const songtitle = document.getElementById("song-title");


async function songdata() {
    try {
        const response = await fetch("assets/data.json");
        const data = await response.json();
        return data;
    } catch (e) {

        console.error("Failed to fulfill my job (loading json)", e);

    }
}
function playsong(index, sdata) {

    if (song.paused) {
        song.play();
        plysong.src = "assets/Icons/play-pause.svg"
        appimg.src = encodeURI("assets/" + sdata.music[index].gif);
        songtitle.textContent = sdata.music[index].title;
        appname.textContent = sdata.music[index].artist;
    } else {
        appimg.src = "assets/pfp/me.gif"
        appname.textContent = "Me.png"
        song.pause();
        plysong.src = "assets/Icons/play-button.svg"

    }

}
async function musicplayer(index, sdata) {

    song.src = encodeURI("assets/" + sdata.music[index].audio);
    appimg.src = encodeURI("assets/" + sdata.music[index].gif);
    playsong(index, sdata);


}
async function main() {
    var index = 0;
    const sdata = await songdata();

    song.src = encodeURI("assets/" + sdata.music[index].audio);
    playBtn.addEventListener("click", () => {
        playsong(index, sdata);
    });

    playNext.addEventListener("click", () => {
        index = (index + 1) % sdata.music.length;
        console.log(index)
        musicplayer(index, sdata)

    })
    playPrvs.addEventListener("click", () => {
        --index;
        if (index < 0) {
            index = sdata.music.length - 1;
        }
        musicplayer(index, sdata)

    })

}

main();
