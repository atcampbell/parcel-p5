export default class Walker {
    constructor() {
        this.x = p5.width / 2;
        this.y = p5.height / 2;
    }

    display() {
        p5.ellipse(100, 100, 100, 100);
    }

    render() {
        p5.stroke(255);
        p5.point(this.x, this.y);
    }

    step() {
        const stepx = p5.floor(p5.random(-1, 2));
        const stepy = p5.floor(p5.random(-1, 2));

        this.x += stepx;
        this.y += stepy;
    }
}
