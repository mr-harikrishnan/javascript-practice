function bian(a,target){
let s=a.sort((a,b)=>a-b);
let st=s[0];
let en=s.length-1;

while(st<=en){
    let mid=Math.floor((st+en)/2);
    if(s[mid]===target){
        return s[mid]
    }
    else if(target>s[mid]){
        st=mid+1
    }
    else{
        en=mid-1
    }

    
}
return-1
}
    console.log(bian([1,4,6,3,8,9,12,56,78,23],3))