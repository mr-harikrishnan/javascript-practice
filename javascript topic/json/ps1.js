// const userObject = { name: "John Doe", age: 30 };
// const jsonStringified = JSON.stringify(userObject);
// console.log(jsonStringified);  // Output: {"name":"John Doe","age":30}

var about  = `{
    "firstName" : "thayub",
    "age" : 19

}`;
console.log(about);
console.log(typeof(about));
var value = JSON.parse(about);
console.log(value);