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
const leftframe = document.getElementById("left-frame");
const rightframe = document.getElementById("right-frame");
const appframeclose = document.getElementById("close-app-frame");
const appframe = document.getElementById("app_frame");
const subtrack = document.getElementById("caption-track").track;
const subtitle = document.querySelector("#sub-display p");
const kakashi = document.getElementById("kakashi");


async function songdata() {
    try {
        const response = await fetch("assets/songdata.json");
        const data = await response.json();
        return data;
    } catch (e) {

        console.error("Failed to fetch songs", e);

    }
}
async function visualnovelst() {
    const dialoguescrn = document.createElement("div");
    const dialoguebox = document.createElement("div");
    dialoguescrn.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px)brightness(50%);
        z-index: 9999;
    `;
    dialoguebox.style.cssText = `
    z-index: 10000;
    width: 68vw;
    height: 200px;
    border-radius: 10px;
    border: 2px solid white;
    position: absolute;
    bottom: 0;
    right: 0;

    `
    document.body.style.overflow = "hidden";
    dialoguescrn.appendChild(dialoguebox)
    document.documentElement.append(dialoguescrn);
}
async function visualnovelend() {
    dialoguebox.remove();
    dialoguescrn.remove();
    document.body.style.overflow = "";

}

async function playsong(index, sdata) {

    subtrack.mode = 'hidden';

    await subtrack.addEventListener("cuechange", () => {
        const activeCue = subtrack.activeCues?.[0];
        if (activeCue) {
            subtitle.replaceChildren(activeCue.getCueAsHTML());
        } else {
            subtitle.replaceChildren();
        }
    })

    if (song.paused) {

        song.play();
        plysong.src = "assets/Icons/play-pause.svg"
        appimg.src = encodeURI("assets/" + sdata.music[index].gif);
        songtitle.textContent = sdata.music[index].title;
        appname.textContent = sdata.music[index].appname;
        console.log(index)


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

// ==========================================
// Appframe Images 
// ==========================================
async function imgdata() {
    try {
        const getimgdata = await fetch("assets/appimages.json");
        const imgdata = await getimgdata.json();
        return imgdata

    } catch (error) {

        console.error("Failed to fetch appimages", error);

    }
}


// ================= Main Function 
async function main() {
    var songindex = 0;
    var imgindex = 0;
    const sdata = await songdata();
    const appimages = await imgdata();

    song.src = encodeURI("assets/" + sdata.music[songindex].audio);
    playBtn.addEventListener("click", () => {
        playsong(songindex, sdata);
    });

    playNext.addEventListener("click", () => {
        songindex = (songindex + 1) % sdata.music.length;
        musicplayer(songindex, sdata)

    })
    playPrvs.addEventListener("click", () => {
        --songindex;
        if (songindex < 0) {
            songindex = sdata.music.length - 1;
        }
        musicplayer(songindex, sdata)

    })
    //========== IMG LOGIC=====================
    rightframe.addEventListener("click", () => {
        imgindex = (imgindex + 1) % appimages.images.length;
        appimg.src = encodeURI("assets/" + appimages.images[imgindex].image)
        appname.textContent = appimages.images[imgindex].appname;

    })

    leftframe.addEventListener("click", () => {
        --imgindex;
        if (imgindex < 0) {
            imgindex = appimages.images.length - 1;
        }
        appimg.src = encodeURI("assets/" + appimages.images[imgindex].image);
        appname.textContent = appimages.images[imgindex].appname;
    })
    appframeclose.addEventListener("click", () => {
        appframe.remove();
    })
    // =============== Kakashi image hover logic ==============
    kakashi.addEventListener("mouseenter", () => {
        appimg.src = "assets/gif/kkshi_fight.gif";


    })
    kakashi.addEventListener("mouseleave", () => {
        appimg.src = "assets/pfp/me.gif";
    })

}


//============== Easter Egg phone ==================



main();
