import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.rect(30, 30, 70, 70);
  };
};

new p5(sketch);
