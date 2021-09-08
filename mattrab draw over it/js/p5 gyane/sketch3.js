let errImg, errSound;

function preload() {
    song = loadSound('Mr Beast.mp3')
}

function setup() {
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    background(0, 0, 0, 0);
    fill(0)
    textSize(16);
    textAlign(LEFT, TOP);
    text('Click here to find out', 0,0)
}

function mousePressed() {
    clear();
    text('MrBeast!', 0,0)
    if (!song.isPlaying()) {
        song.play();
    }
}