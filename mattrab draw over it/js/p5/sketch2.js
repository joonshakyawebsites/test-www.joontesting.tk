let errImg, errSound;
let prevX, prevY;

function preload() {
    errImg = loadImage('Error Message.png')
    errSound = loadSound('Error Message.mp3')
}

function setup() {
      createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
      background(0, 0, 0, 0);
      errSound.setVolume(0.2);
      errSound.play();
      image(errImg, width/2 - 150, height/2 - 60)
}

function mousePressed() {
      image(errImg, mouseX - 150, mouseY - 10)
      errSound.play();
}

function mouseDragged() {
      image(errImg, mouseX - 150, mouseY - 10)
      errSound.play();
}