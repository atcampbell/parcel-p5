const height = window.innerHeight;
const width = window.innerWidth;

function setup() {
    createCanvas(width, height);
    background(40);
};

function draw() {
    background(255,200,200);
    circle(30, 30, 20);
}

window.setup = setup;
window.draw = draw;
