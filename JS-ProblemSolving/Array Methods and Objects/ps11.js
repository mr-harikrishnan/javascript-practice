// You have an array of 3 objects, each representing a product with properties name and price.
// Write a program to calculate and print the total price of all the products in the array.

bike=[
    {
        name:"ns200",
        price:30
    },
    {
        name:"r15",
        price:25
    },
    {
        name:"rtr",
        price:15
    },
    {
        name:"hero",
        price:20
    }
]

let sum=0;
for(i=0;i<bike.length;i++){
    sum=sum+bike[i].price;
}
console.log(sum);


for(i=0;i<bike.length;i++){
    if(bike[i].price==20){
        console.log(bike[i].name)
    }
}