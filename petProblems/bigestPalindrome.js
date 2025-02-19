var ar=[]
function palindrome(h){
    b=h.split("").reverse().join("")
    if(b==h){
        ar.push(h)
    }

}

a = "mamfmam"

for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        b = a.substring(i, j + 1)
        palindrome(b)
       

    }
}
console.log(ar)




