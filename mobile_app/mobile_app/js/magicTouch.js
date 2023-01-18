let canvas;
let timestep = 0;
let waitForIt = true;
let previousPositonX, previousPositonY;
let speedX, speedY;
var timer;
var updateStarted = false;
var touches = [];
let touchingState = false;

function update() {
  if (updateStarted) return;
  updateStarted = true;

  var nw = canvas.getBoundingClientRect().width;
  var nh = canvas.getBoundingClientRect().height;
  if (!waitForIt) timestep++;

  var i,
    len = touches.length;
  for (i = 0; i < len; i++) {
    var touch = touches[i];
    var px = touch.pageX;
    var py = touch.pageY;

    if (!touchingState) {
      canvas.style.left = px - nw / 2 + "px";
      canvas.style.top = py - nh / 2 + "px";
      console.log("touching");
    } else {
      canvas.style.top =
        parseInt(canvas.style.top, previousPositonY) + speedY - nh / 2 + "px";
      canvas.style.left =
        parseInt(canvas.style.left, previousPositonX) + speedX - nw / 2 + "px";
      console.log("not touching");
    }
  }

  updateStarted = false;
}

function ol() {
  canvas = document.getElementById("tiger");
  timer = setInterval(update, 15);

  canvas.addEventListener("touchend", function () {
    touchingState = true;
    setTimeout(() => {
      window.location.href = "./2ndListPage.html";
    }, 2000);
    console.log("state on touch END: " + touchingState);
  });

  canvas.addEventListener("touchmove", function (event) {
    event.preventDefault();
    touches = event.touches;

    speedX = touches[0].pageX - previousPositonX;
    previousPositonX = touches[0].pageX;

    speedY = touches[0].pageY - previousPositonY;
    previousPositonY = touches[0].pageY;
    console.log(speedX + "X", speedY + "Y");
    console.log("State while toucing" + touchingState);
  });

  canvas.addEventListener("touchstart", function (event) {
    console.log("start");
    if (touches.length > 1) {
      setTimeout(() => (waitForIt = false), 3000);
    }
  });
}
