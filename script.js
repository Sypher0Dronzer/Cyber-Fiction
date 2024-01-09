/**@type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let images = [];
for (let i = 1; i <= 300; i++) {
  let image = new Image();
  image.src = `images/male${i.toString().padStart(4, "0")}.png`;
  images.push(image);
}
const imgHeight = images[1].height;
const imgWidth = images[1].width;
let hratio = canvas.height / imgHeight;
let wratio = canvas.width / imgWidth;
let ratio = Math.max(hratio, wratio);
let centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
let centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;

window.addEventListener("load", () => {
  ctx.drawImage(
    images[1],
    0,
    0,
    images[1].width,
    images[1].height,
    centerX,
    centerY,
    images[1].width * ratio,
    images[1].height * ratio
  );
animate();

});

let frame = 1;
let i = 1;

function animate() {
  frame++;
  if (frame % 5 == 0) {
    if (i < 300) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        images[i],
        0,
        0,
        images[i].width,
        images[i].height,
        centerX,
        centerY,
        images[i].width * ratio,
        images[i].height * ratio
      );
      i++;
    }
    else{
        // console.log(i);
        i=1
    }
  }
  requestAnimationFrame(animate);
}
