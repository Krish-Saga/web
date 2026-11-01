boxbar = document.getElementById("app_bar");
box = document.getElementById("app_frame");
let offsetX = 0,
    offsetY = 0,
    mouseX = 0,
    mouseY = 0;

boxbar.addEventListener("pointerdown", dragMouseDown);

function dragMouseDown(e) {
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.addEventListener("pointermove", elementDrag);
    document.addEventListener("pointerup", stopDragElement);
}
function elementDrag(e) {
    e.preventDefault();
    offsetX = mouseX - e.clientX;
    offsetY = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    box.style.top = box.offsetTop - offsetY + "px";
    box.style.left = box.offsetLeft - offsetX + "px";
}
function stopDragElement() {
    document.removeEventListener("pointermove", elementDrag);
    document.removeEventListener("pointerup", stopDragElement);
}

// Adding Goon mode Later 

// ==========================================
// Appframe Image changer 
// ==========================================
const framebtn = document.querySelectorAll(".appbtns");
const frameimg = document.querySelector("#frame_image img");
const appName = document.querySelector(".app-name")

console.log(framebtn);
framebtn.forEach((button) => {
    button.addEventListener("click", slideimg);
});
function slideimg() {
    if (frameimg.classList.contains("1")) {
        frameimg.src = "assets/memes/sory_pika.jpg";
        appName.textContent = "Pika_Pika.pika";
        frameimg.classList.add("2");
        frameimg.classList.remove("1");
    } else {
        frameimg.src = "assets/pfp/me.gif";
        appName.textContent = "Me.png";
        frameimg.classList.add("1");
        frameimg.classList.remove("2");

    }

}
