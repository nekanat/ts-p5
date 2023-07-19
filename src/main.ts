import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(35, 57, 68);
  };

  p.draw = () => {
    p.rect(30, 30, 70, 70);
    p.fill(p.random(0, 255));
  };
};

new p5(sketch);
