boxbar = document.getElementById("image_bar");
box = document.getElementById("image_frame");
let offsetX = 0,
  offsetY = 0,
  mouseX = 0,
  mouseY = 0;

boxbar.addEventListener("mousedown", dragMouseDown);

function dragMouseDown(e) {
  e.preventDefault();
  mouseX = e.clientX;
  mouseY = e.clientY;
  console.log("worked");
  document.addEventListener("mousemove", elementDrag);
  document.addEventListener("mouseup", stopDragElement);
}
function elementDrag(e) {
  e.preventDefault();
  offsetX = mouseX - e.clientX;
  offsetY = mouseY - e.clientY;
  mouseX = e.clientX;
  mouseY = e.clientY;
  console.log("processing");
  console.log((box.style.top = box.offsetTop - offsetY + "px"));
  box.style.left = box.offsetLeft - offsetX + "px";
}
function stopDragElement() {
  document.removeEventListener("mousemove", elementDrag);
  document.removeEventListener("mousedown", stopDragElement);
  console.log("close");
}
