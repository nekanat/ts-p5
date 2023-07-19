## Typescript-P5 project temlate, happy mutilating <3

__run__ `npm run dev` </br>
__preview__ `npm run preview` </br>

pages run on `http://localhost:5173/`

testing : 
- `npm run test`
- `npm run test -- --watch` (watching for changes)

## P5 sketch example 

``` ts
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

```

Check tsconfig.json for more information, thank you. </br>
Built via [Vite](https://vitejs.dev/)