  

// problem NO:1
function great(){
  console.log("hello,world");
}
great();

// problem NO:2

function getRandomNumber(){
  let num;
  num=Math.random();
  return num;
}
console.log(getRandomNumber());


// problem NO:3

function displayGreeting(name){
  console.log("Hello "+name);
}
displayGreeting("hari");

// problem NO:4


function calculateSquare(num){
return num*num;
}
console.log(calculateSquare(5));


// problem NO:5


let a="hari";
let b="krisnan";
function concaatStrings(a,b){
return a+b;
}
console.log(concaatStrings(a,b));

// problem NO:6
function isadult(age){
  if(18<=age){
    console.log("true");
  }
  else{
    console.log("false")
  }
}

isadult(17)

// problem NO:7

function addNumbers(a,b){
  return a+b;
}
console.log(addNumbers(5,8))

// problem NO:8

function iseven(a){
if(a%2===0){
 return true;
}
else{
 return false;
}

}

console.log(iseven(5));

// problem NO:9

function  compareNumbers(a,b){

if(a==b){
  return "The numbers are equal";
}
else if(a>b){
  return "The first number is greater";
}

else if(b>a){
  return "The second number is greater";
}

else{
  return false;
}
}

console.log(compareNumbers(7,5));
