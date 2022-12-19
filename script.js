let cursorInner = document.querySelector(".cursor-inner");
let cursorOuter = document.querySelector(".cursor-outer");

document.addEventListener("mousemove", moveCursor);

function moveCursor(event) {
  let x = event.clientX;
  let y = event.clientY;

  cursorInner.style.left = x + "px";
  cursorInner.style.top = y + "px";
  cursorOuter.style.left = x + "px";
  cursorOuter.style.top = y + "px";
}

let links = Array.from(document.querySelectorAll(".navbar a"));
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    cursorInner.classList.add("grow");
    cursorOuter.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    cursorInner.classList.remove("grow");
    cursorOuter.classList.remove("grow");
  });
})