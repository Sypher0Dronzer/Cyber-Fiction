/**@type {HTMLCanvasElement} */
//scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger) 


//lenis + scrolltrigger
const lenis = new Lenis({
  duration:1.2,
  easing:(t)=>Math.min(1,1.001 - Math.pow(2,-10*t))
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let images = [];
for (let i = 1; i <= 300; i++) {
  let image = new Image();
  image.src = `images/male${i.toString().padStart(4, "0")}.png`;
  images.push(image);
}
const imgHeight = images[0].height;
const imgWidth = images[0].width;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let hratio = canvas.height / imgHeight;
let wratio = canvas.width / imgWidth;
let ratio = Math.max(hratio, wratio);
let centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
let centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;

window.addEventListener("load", () => {
  animate()
});

let frame = 0;

function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        images[frame],
        0,
        0,
        images[frame].width,
        images[frame].height,
        centerX,
        centerY,
        images[frame].width * ratio,
        images[frame].height * ratio
      );
}
gsap.to("#canvas", {
  scrollTrigger:{
    trigger: 'html',
    pin: "#canvas",
    start: "top top",
    end: `+=${canvas.height*5 -200}`,
  }, 
});


let html= document.documentElement
window.addEventListener('scroll',()=>{
  let fractionScrolled = scrollY/(canvas.scrollHeight*5)
  frame=Math.min(299,Math.floor(fractionScrolled *300 ))
  animate()
})

window.addEventListener('resize',()=>{
  scaleImage()
})
function scaleImage(){
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  hratio = canvas.height / imgHeight;
  wratio = canvas.width / imgWidth;
  ratio = Math.max(hratio, wratio);
  centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
  centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;
  animate()  
}
animate()