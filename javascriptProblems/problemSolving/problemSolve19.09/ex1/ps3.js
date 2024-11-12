// Create a program that asks for the total price of items and applies a discount based on conditions:
// 10% discount if the total is more than $100.
// 20% discount if the total is more than $200.
// // No discount if the total is less than $100.

function amount(a){
 

    if(a>200){
        dis=(20/100)*a;
        da=a-dis;
        console.log("20% Discount="+da)
    }

    else if(a>100){
        dis=(10/100)*a;
        da=a-dis;
        console.log("10% Discount="+da)
      }

    else{
        console.log("NO DISCOUNT")
    }
  
    
}
amount(150)