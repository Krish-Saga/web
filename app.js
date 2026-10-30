boxbar = document.getElementById("image_bar");
box = document.getElementById("image_frame");
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
