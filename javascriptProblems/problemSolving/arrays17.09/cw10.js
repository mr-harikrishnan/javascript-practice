b=["one","two","three","four"];
str=" ";
for(i=b.length-1;i>=0;i--){
    str=str+b[i]+",";
    cut=str.slice(0,-1);
    spl=cut.split(",")
}
console.log(spl);
