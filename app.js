let str = "1234567890ABCDEF";

let canvas = document.querySelector("#canvas");
let button = document.querySelector("button");
button.addEventListener("click", () => {
  let hex_array = [];
  for (let i = 0; i < 6; i++) {
    let random_value = Math.floor(Math.random() * str.length);
    random_value = str[random_value];
    hex_array.push(random_value);
  }
  let color = "#" + hex_array.join("");
  canvas.style.backgroundColor = color;
});
