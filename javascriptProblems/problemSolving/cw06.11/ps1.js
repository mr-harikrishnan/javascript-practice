// Given an array of strings, return the string which has maximum 'a' character present in it.
//   eg = ["apple", "appeal", "after"] output is appeal as it has 2 a's in it

function array(a) {
    let count1 = 0

    for (i = 0; i < a.length; i++) {
    
        let count = 0;
        let s = a[i].split("")

        for (j = 0; j < s.length; j++) {
            if (s[j] === "a") {
                count++
            }
        }
        
        if (count > count1) {
            count1 = count;
            str = a[i];
        }


    }

    console.log(str)
}
array(["apple","appeal", "after","hari", ])