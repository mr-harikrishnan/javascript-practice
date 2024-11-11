// Write a program to generate the first n even numbers starting from 0.
function even(n) {
    for (i = 0; i <n*2; i++) {
        if (i%2==0){
            console.log(i);
        }
    }
}
even(4)
