let errImg, errSound;

function preload() {
    errSound = loadSound('Mr Beast.mp3')
}

function setup() {
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    background(0, 0, 0, 0);
    errSound.play();
}
