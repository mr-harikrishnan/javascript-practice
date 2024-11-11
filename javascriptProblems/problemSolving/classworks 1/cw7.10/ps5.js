a="hello world js";
let c = a.split(' ');
let d = c.map(x => x[0]+x[1] + x[2].toUpperCase() + c.slice(3)).join(",")
console.log(d)