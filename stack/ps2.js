class box{
    constructor(){
        this.arr=[]
    }

    push(a){
        this.arr.push(a)
    }
    peek(){
        return this.arr[this.arr.length-1]
    }

}

let myBox=new box()
myBox.push(5)
console.log(myBox.peek())
