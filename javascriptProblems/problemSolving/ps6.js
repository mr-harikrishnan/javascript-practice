// Create a program to check whether a given character is uppercase or lowercase. Print "Uppercase Letter" or "Lowercase Letter" accordingly.

function alb(chr){
    if(chr<='a'&&chr>='z'){
        console.log("Lowercase Letter")
    }
    else{
        console.log("Uppercase Letter")
    }
}
alb("A")