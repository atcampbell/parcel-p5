import p5 from 'p5';
import { polygon } from './shape';

const sketch = p => {
    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
    };

    p.draw = () => {
        p.background(255, 100, 100);
        p.stroke(220);

        const dim = Math.min(p.width, p.height);

        const x = p.width / 2;
        const y = p.height / 2;
        polygon(p, x, y, dim * 0.35, 6);
    };
};

const myp5 = new p5(sketch);
