function preload(){
    picture=loadImage("download.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw() {
    background("grey");
    fill("green");
    stroke("red");
    rect(30,30,340,340);
    fill("grey");
    rect(60,60,280,280);
    fill("red");
    stroke("green");
    circle(30,30,40);
    circle(370,30,40);
    circle(30,370,40);
    circle(370,370,40);
    image(picture,90,90,230,210);
}
