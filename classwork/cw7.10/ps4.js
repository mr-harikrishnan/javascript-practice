a="hari muruga tamil karukku";
let c=a.split(' ');
let d=c.map(x=> x[0]+x[1].toUpperCase()+a.slice(2)).join()
console.log(d)