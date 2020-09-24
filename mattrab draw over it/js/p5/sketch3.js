let errImg, errSound;

function preload() {
    song = loadSound('Mr Beast.mp3')
}

function setup() {
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    background(0, 0, 0, 0);
}

function draw() {
    if (!song.isPlaying()) {
        song.play();
    }
}