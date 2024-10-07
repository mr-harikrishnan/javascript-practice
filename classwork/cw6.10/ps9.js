nam=["hari","muthamilan","joe","kavinisha","ramasubbuhfygy","karukkavel"];
let count=0;
for(i=0;i<nam.length;i++){
    let s=nam[i].split('');
    if(count<s.length){
        count=s.length;
        c=nam[i];
    }
}
console.log(count,c);
