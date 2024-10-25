    function check(a,b){

let isCheck=false;
for(i=0;i<a.length;i++){

    if(a[i]===b){
        isCheck=true;
    }
}

if(isCheck){
    console.log("yes");
}
else{
    console.log("no")
}

}
    let nam="hari";
    check(["apple","zebra","ball","yash","cat","x-ray","dolphin","wall"],nam)
    