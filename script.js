function setup() {
    createCanvas(640, 560);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    cirle(30, 30, 30);
    ellipse(20, 40, 30, 30);
    rect(20, 40, 30, 30)
}