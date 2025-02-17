arr=[1,[2,[4,6],3],7]
let a=[]

for(j=0;j<arr.length;j++){
    if(typeof arr[j] == "object"){
        obj(arr[j])
    }

    else{
        number(arr[j])
    }
}

function number(x){
    a.push(x)
}

function obj(y){
    for(i=0;i<y.length;i++){
        if(typeof y[i] == "object"){
            obj(y[i])
        }
        else{
            number(y[i])
        }
    }
}

console.log(a)

