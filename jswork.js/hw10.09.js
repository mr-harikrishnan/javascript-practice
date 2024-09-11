// 1st some
function sumOfNumber(n){
   let i=1;
   let a=0;
   while(i<=n){
      a=a+i;
      i++;
     
   }
   return a;
}

console.log(sumOfNumber(5));

// 2nd some

function calculateFactorial(n){
   let i=1;
   let b=1;
   while(i<=n){
      b=i*b;
      i++;

   }
   return b;
}

console.log(calculateFactorial(5));

// 3rd some

function printEvenNumbers(n){
   let i=1;
   while(i<=n){
      if(i%2===0){
console.log(i);
      }
      i++;
   }
}
printEvenNumbers(10);

// 4th some debugg

function sumNumbers(n) {
   let sum = 0;
   let i = 0;
   while (i <= n) {
     sum += i;
     i++;
   }
   return sum;
 }

 console.log(sumNumbers(2));
