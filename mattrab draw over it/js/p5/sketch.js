function setup() {
  createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  background(0, 0, 0, 0);
}

function draw() {
  noStroke();
  fill(255, 0, 120, 50);
  if (mouseX != 0 && mouseY != 0) {
    ellipse(mouseX, mouseY, 50, 50);
  }
}