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
const dialogue = document.createElement("pre");
const typingsound = new Audio("assets/music/dialogue.mp3")
let stoptyping = false;


async function songdata() {
    try {
        const response = await fetch("assets/songdata.json");
        const data = await response.json();
        return data;
    } catch (e) {

        console.error("Failed to fetch songs", e);

    }
}
function typewriter(typed, dialoguetext) {
    if (stoptyping) { return };

    if (typed < dialoguetext.length) {
        dialogue.textContent += dialoguetext[typed];
        typingsound.play();
        console.log(typingsound.currentTime);
        typed++;
        setTimeout(() => {
            typewriter(typed, dialoguetext)
        }, 50);
    }

}

async function visualnovelst() {

    const uwu = new Audio("assets/music/uwu_onichan.mp3")
    uwu.play();
    const ascii = document.createElement("pre");
    const dialoguescrn = document.createElement("div");
    const dialoguebox = document.createElement("div");
    const character = document.createElement("h1");
    const stbtn = document.getElementById("novel");
    dialogue.textContent = "";
    const dialoguetext = `
        H-hey, cutie! ♡, I know you're excited to explore this part of the page...
        But you'll have to wait just a little longer!
        I'm still getting things ready, you know?
        It takes time! >_<
        You can wait for me, can't you? ♡
        `;
    let typed = 0;
    typewriter(typed, dialoguetext);
    character.textContent = "|>·͙⁺˚•̩̩͙⁺ Jenny ⁺•̩̩͙˚⁺·͙໒꒱‧₊˚";
    ascii.textContent = `
⣿⣿⣿⡏⣸⣿⣿⣿⣿⣿⣿⢃⣾⢋⠃⡻⣿⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣹⡟⢻⠿⢻⢹⡜⡰⠹⣼⣿⣿⣿⣿⣿⣿⣿⡆⢿⣿⣿⣆ 
⣿⣿⣿⢱⣿⣿⣿⣿⣿⣿⡟⣼⢏⡎⠰⢀⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠇⠰⡄⡄⢷⢡⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⡸⣿⣿⣿
⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⢣⡏⣼⣿⣷⣾⣿⣿⡏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣶⣾⣾⣿⣿⣿⡜⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿
⠻⠿⢁⣿⣿⣿⣿⣿⣿⡏⠘⣸⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿
⣴⡆⢸⣿⣿⣿⣿⣿⣿⠃⢡⣿⣿⣿⣿⣿⣿⣿⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢻⣿⣿⣿⣿⣿⣿⣿⡄⣿⣿
⣿⠇⣿⣿⣿⣿⣿⣿⣿⠀⣾⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⣿⡟⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿
⣿⢸⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⡏⣼⣿⣿⣿⣿⣿⣿⡿⢱⣿⣿⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⠇⠸⡿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿
⣿⣼⣿⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⠏⣿⣿⡟⢠⣿⣿⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⡿⢡⣿⣿⣿⠟⣋⡍⢰⣦⡘⣿⣿⡘⣿⣿⣷⣾⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣺⣿
⡇⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⡿⠋⣠⣥⠂⠀⣶⣶⣦⣭⣙⠻⢋⣼⣿⣿⣿⣿⢡⣿⣿⡿⢡⣿⣿⣟⣱⣾⣿⢣⣿⣿⣷⡌⢿⣿⣌⢿⣿⣿⣿⣿⣿⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
⠇⣿⣿⣿⣿⣿⣿⣿⠀⠿⠋⢀⣼⠟⢡⠆⣼⣿⣿⣿⣿⠏⣰⣶⣿⣿⣿⢫⢇⣾⣿⠟⢡⣿⣿⣿⣿⣿⣿⡏⣾⣿⣿⣿⣿⣆⠻⣿⣦⡙⣌⢿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡆⣿⣿⣿⣿⣿⣿⣿⢀⡴⢁⡾⢋⣴⠃⣼⣿⣿⣿⠟⡡⢰⣿⣿⣿⣿⢇⢎⣾⡿⢃⡞⣸⣿⣿⣿⣿⣿⠟⣼⣿⣿⠿⠿⢿⣿⣷⡈⢿⣿⣮⠢⠙⢿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡷⣿⣿⣿⣿⣿⣿⣿⠈⡠⠋⣰⣿⠃⣼⣿⡿⠛⠡⠾⢡⣿⣿⣿⣿⠏⢀⠾⢋⣴⡿⢡⣿⣿⣿⣿⣿⠏⣴⠟⣫⠵⠾⠛⠋⠉⠁⠀⠀⠀⠉⠀⠀⠀⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣧⣿⣿⣿⣿⣿⣿⣿⠀⣠⣾⠈⠁⠚⠋⠉⠀⠈⠉⠀⠀⠊⠙⠿⠃⠀⣠⣶⣿⣿⢣⣿⣿⣿⣿⡿⢁⣾⡧⠂⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣦⣤⡀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣇⣿⣿⣿⣿⣿⣿⣿⡆⡿⠛⠀⠀⢀⣠⣴⡶⠀⠀⠀⠀⠀⠀⠀⠡⣾⣿⣿⣿⢃⣾⣿⣿⡿⠋⣰⣿⣿⣷⣀⣴⡆⠀⠄⠀⣤⣄⢀⡙⠉⣿⣿⠇⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣇⠠⡀⠀⠰⣿⣿⣿⡇⠀⠀⠀⣴⣦⠀⠋⢰⣿⣿⣿⢃⣾⣿⣿⠋⣠⣾⣿⣿⣿⣿⣿⣿⣧⠀⣠⣦⠻⠟⢠⣽⠃⣿⡟⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢛⣿⢻⣿⣿⣿⣿⣿⣿⡄⢹⡄⠀⢻⣿⣿⣇⠠⣾⣧⣙⣋⣼⡇⢸⣿⣿⢃⣾⠟⠛⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠻⣿⠸⠿⠸⠟⣸⣿⢡⡠⠠⢣⣿⣿⣿⣿⣿⡟⣹⣿⢿⣿
⡄⢹⡘⣿⣿⣿⣿⣿⣿⣷⠀⢻⣦⠀⠻⣿⣿⣦⠹⠇⠾⠿⢀⣃⣿⡿⢁⣈⠀⣠⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣿⣦⣤⡿⠁⣠⣿⣿⣿⣿⣿⠟⣠⣿⣿⢸⣿
⣼⢸⣇⢻⣿⣿⣿⣿⣿⣿⣧⡈⢿⣿⣷⣉⣿⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⡟⣻⠝⢀⣴⣿⣿⣿⣿⠟⣡⣾⣿⣿⡇⣬⣉
⣿⡄⣿⡜⣿⣿⠻⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡾⢋⣴⣿⣿⣿⠟⢋⣤⣾⣿⣿⣿⢸⠃⣿⣿
⣿⣷⢹⣷⡘⢿⣷⣦⣝⡛⠿⣿⣿⣷⣌⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣴⡿⠿⢛⣩⣴⠆⢸⣿⣿⣿⣿⡿⠸⢸⣿⣿
⣉⡉⠘⣿⣿⣮⡻⢿⣿⣿⣷⡄⢨⠉⢛⠛⠂⠌⠙⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⢿⣿⣿⣿⣿⣏⣀⣬⣤⣶⣾⣿⣿⡟⢀⣿⣿⣿⣿⣿⡇⡁⣿⣿⣿
⣿⣿⣧⢹⣿⣿⣿⣦⣍⠉⠛⠻⠦⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⢉⣽⣿⣾⣿⣿⣿⣿⣿⣿⣷⡄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣾⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿
⣿⣿⣿⡌⣿⣿⣿⣿⣿⡟⣷⠀⢸⣿⡆⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢠⣿⣿⣿⣿⣿⡏⢀⣿⣿⣿⣿
⣿⣿⣿⡇⢹⣿⣿⣿⣿⣇⢻⡄⢸⣿⣿⡄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣴⠇⣾⣿⣿⣿⣿⡿⠀⣼⣿⣿⣿⣿
⣿⣿⣿⡇⡄⢻⣿⣿⣿⣿⡘⡇⠸⣿⣿⣿⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⢿⣿⣿⣿⣿⣿⣿⠟⣡⣾⣿⣿⣿⣿⣿⣿⣿⠟⢉⣴⣾⡟⣸⣿⣿⣿⣿⡿⢁⣾⣿⣿⣿⣿⣿
⣿⣿⣿⡟⣿⠈⢻⣿⣿⣿⣷⠱⠀⣿⣿⣿⣿⣿⣦⣉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣛⣥⣾⣿⣿⣿⣿⣿⣿⠿⠋⠁⠄⠻⣿⡟⣰⣿⣿⣿⣿⡿⢁⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣷⡏⣸⣆⠻⣿⣿⣿⣧⠀⠹⣿⣿⣿⣿⣿⣿⣿⣶⣬⣙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢋⡀⡰⢂⡀⣶⣄⠋⣰⣿⣿⣿⣿⠟⣴⣿⣿⣿⣿⣿⣿⣿⠿
⣿⣿⣿⠿⢃⣿⣿⣧⡘⢿⣿⣿⣧⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⣠⣶⣾⢡⡿⢃⣼⣿⣿⣿⠟⣡⣾⣿⣿⣿⣿⣿⣿⡟⠁⢀
⣿⣿⡟⠀⣼⣿⣿⣿⣿⣦⡙⢿⣿⣷⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠆⠈⠙⠿⠿⠛⠉⡠⠄⠀⣠⣴⣶⣾⣿⣿⡿⠈⣠⣿⣿⡿⢋⣡⣾⣿⣿⣿⣿⣿⣿⡿⠃⠀⠐⢋
⡿⠜⠀⣰⣿⣿⣿⣿⣿⣿⣿⣦⣝⠻⢿⣦⠹⣿⣿⣿⡿⢩⣍⡛⣿⣿⣿⣿⡇⢚⡀⠀⠀⠀⠁⠔⢠⣾⣿⣿⣿⣿⣿⣿⣉⣐⠛⠛⢉⣥⣶⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⢠⣾⣿
⠁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣁⣈⣻⡟⠠⢿⡟⣰⣿⣿⣿⣿⣿⣆⢳⣤⣄⠻⠁⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠉⠻⠛⠻⢿⣿⣿⠿⠋⠀⠀⠀⢀⣾⣿⣿
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⡀⠿⠿⠁⠄⠿⠿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠈⠠⠄⠀⠀⠀⠀⠀⣼⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠇⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⢶⡆⠀⢰⠸⠖⢈⣿⣿⣿⠿⠛⠁⣠⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿
    `
    let novelst = true;
    ascii.style.cssText = `
    color: #FF9EAD;
    text-shadow: 0 0 5px #FF9EAD55;
    transform: scale(0.7);
    background: rgba(0,0,0,0.7);
    position: absolute;
    right: 2rem;
    `;
    stbtn.onclick = () => {
        if (novelst) {
            dialoguebox.remove();
            dialoguescrn.remove();
            stoptyping = !stoptyping;
            typingsound.pause()
            document.body.style.overflow = "";
            novelst = false;
        } else {
            stoptyping = !stoptyping;
            visualnovelst();
            novelst = true;
        }
    }
    character.style.cssText = `
    color: white;
    font-size: 3rem;
    font-weight: 400;
    position:absolute;
    top: -2rem;
    left: 4rem;
    color: #FFE8E3;
   `;
    dialogue.style.cssText = `
    padding: 20px 100px;
    color: #FF9EAD;
    font-size: 1.7rem;
    text-shadow: 2px 2px 2px red;
    `;
    dialoguescrn.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(5px);
        z-index: 9999;
    `;
    dialoguebox.style.cssText = `
    z-index: 10000;
    width: 100vw;
    height: 200px;
    border-radius: 10px;
    background: rgba(0,0,0,0.4);
    position: absolute;
    box-shadow: inset 0px 20px 20px black;
    bottom: 0;
    `
    document.body.style.overflow = "hidden";
    dialoguescrn.append(ascii, dialoguebox)
    dialoguebox.append(character, dialogue);
    document.documentElement.appendChild(dialoguescrn);

    document.documentElement.appendChild(stbtn);
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
