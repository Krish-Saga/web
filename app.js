const boxbar = document.getElementById("app_bar");
const box = document.getElementById("app_frame");
const para = document.getElementById("intro")
const words = para.textContent.split(" ");
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

para.innerHTML = words.map((word, index) => {
    return `<span class="dancing-word" style="--i: ${index}">${word}</span>`
}).join(" ")
