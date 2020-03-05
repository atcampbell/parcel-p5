export function polygon(p5, x, y, radius, sides = 3, angle = 0) {
    p5.beginShape();
    for (let i = 0; i < sides; i++) {
        const a = angle + Math.PI * 2 * (i / sides);
        const sx = x + Math.cos(a) * radius;
        const sy = y + Math.sin(a) * radius;
        p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
}
