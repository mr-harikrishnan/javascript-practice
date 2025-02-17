class box{
    constructor(){
        this.arr=[]
    }

    push(n){
this.arr.push(n)
    }

    peek(){
        return this.arr[this.arr.length-1]
    }

    pop(){
        this.arr.pop()
    }
}

const myBox=new box()
myBox.push(10)
myBox.push(30)
myBox.push(40)
console.log(myBox)





