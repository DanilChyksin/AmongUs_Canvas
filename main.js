const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const discord = document.getElementsByClassName("discord");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function showDiscord() {
  discord[0].classList.remove("none");
}
setTimeout(showDiscord, 4200);
function Circle(x, y, dx, radius, i) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.radius = radius;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "#fff";
    c.fill();
  };
  this.update = function () {
    if (Math.abs(circleArray[i].x) > innerWidth + 50) {
      circleArray[i].radius = radius;
      circleArray[i].x = -30;
      circleArray[i].y = Math.random() * innerHeight;
    }
    if (circleArray[i].radius < 6 && i % 2 === 0) {
      this.radius += 0.02;
    }
    this.x -= this.dx;

    this.draw();
  };
}
let circleArray = [];
function create() {
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = Math.random() - 0.5 * 4;
    let radius = 3;

    circleArray.push(new Circle(x, y, dx, radius, i));
  }
}
create();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
