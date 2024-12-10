// Single function to calculate the total bill for an array of usages using a for loop
function calculateTotalBill(a) {

    let billAmount=0
    for(i=0;i<a.length;i++){
        if(a[i]<=100){
            billAmount=billAmount+a[i]*8
        }
        else if(a[i]<=300){
            billAmount=billAmount+(100*8)+(a[i]-100)*12
        }
        else{
            billAmount=billAmount+(100*8)+(200*12)+(a[i]-300)*15
        }
    }
   
console.log(billAmount)

}

calculateTotalBill([350, 150, 100])


