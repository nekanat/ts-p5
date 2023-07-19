import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(35, 57, 68);
  };

  p.draw = () => {
    p.fill(p.random(0, 255));
    p.rect(30, 30, 60, 60);

    const yellowFactor = p.random(0, 255);
    p.fill(yellowFactor, yellowFactor, 0);
    p.rect(20, 20, 40, 40);

    const complementaryYellowFactor = 255 - yellowFactor;
    p.fill(complementaryYellowFactor, complementaryYellowFactor, 0);
    p.rect(60, 60, 40, 40);
  };
};

new p5(sketch);
