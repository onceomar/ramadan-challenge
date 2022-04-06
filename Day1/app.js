let btn = document.querySelector(".btn");
let div = document.querySelector(".my_div");
btn.addEventListener("click", change_color);

function change_color() {
    let R = Math.floor(Math.random() * 255) + ",";
    let G = Math.floor(Math.random() * 255) + ",";
    let B = Math.floor(Math.random() * 255);
    // let RGB = "rgb(" + R + "," + G + "," + B + ")"
    let RGB = `rgb(${R}${G}${B})`;
    div.style.backgroundColor = RGB;
    console.log(RGB)
}

setInterval(change_color,1000)