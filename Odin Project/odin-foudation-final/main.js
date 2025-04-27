const MAIN_WIDTH = 500;
const MAIN_HEIGHT = 500;
const BORDER_SIZE = 1;
let main = document.getElementsByClassName("main")[0];
console.log("hungdx", main);

document.body.addEventListener("mousedown", (e) => {
  if (e.button === 0) isMouseDown = true;
});
document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});
let num = 16; // 16x16
let widthPerItem = MAIN_WIDTH / num - BORDER_SIZE * 2;
let heightPerItem = MAIN_HEIGHT / num - BORDER_SIZE * 2;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    let div = document.createElement("div");
    div.style.border = `${BORDER_SIZE}px solid lightgray`;
    div.style.width = widthPerItem + "px";
    div.style.height = heightPerItem + "px";
    div.addEventListener("mouseenter", (event) => {
      if (isMouseDown) {
        div.style.backgroundColor = this.getRandomRGB();
      }
    });
    div.addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        div.style.backgroundColor = this.getRandomRGB();
      }
    });
    main.appendChild(div);
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
