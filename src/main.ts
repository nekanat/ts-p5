import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(35, 57, 68);
  };

  p.draw = () => {
    p.fill(p.random(0, 255));
    p.rect(30, 30, 70, 70);

    const yellowFactor = p.random(0, 255);
    p.fill(yellowFactor, yellowFactor, 0);
    p.rect(20, 20, 50, 50);
  };
};

new p5(sketch);
