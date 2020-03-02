const height = window.innerHeight;
const width = window.innerWidth;
const boxSize = 20;

class Square {
    constructor(x, y, height, width) {
        rect(x, y, height, width);
    }
}

const setup = () => {
    createCanvas(width, height);
    background(40);
};

function draw() {
    background(255,200,200);
    circle(30, 30, 20);
}

window.setup = setup;
window.draw = draw;
