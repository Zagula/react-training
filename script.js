import { createConverter } from "./unit-converter.module.js";


let conversion = {
    from: "cm",
    to: "mm"
};
let conversion2 = {
    from: "F",
    to: "C"
};
let conversion3 = {
    from: "F",
    to: "K"
};

let c = createConverter(conversion);
let c2 = createConverter(conversion2);
let c3 = createConverter(conversion3);

console.log(c.convert(17,19,24,27));
console.log(c.convert(["10","20","30"]));
console.log(c.convert(10));
console.log(c.convert("10"));
console.log(c2.convert([50,77,104]));
console.log(c3.convert(12));