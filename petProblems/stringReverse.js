a="hari"
b=a.split("")
console.log(b)
ar=[]
for(i=b.length-1;i>=0;i--){
ar.push(b[i])
}
c=ar.join("")
c[0].upperCase()
console.log(c)