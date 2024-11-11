// Check if Two Arrays Are Permutations of Each Other
// Given two arrays of integers, check if one is a permutation of the other (i.e., 
//     both contain the same elements with the same frequencies but possibly in different orders).
// // Example: [1, 2, 3] and [3, 1, 2] should return true, but [1, 2, 2] and [2, 1, 3] should return false.


function array(a, b) {
    let setCount=a.length;
    

        let x = a.sort((a, b) => a - b);
        let y = b.sort((a, b) => a - b);

        for (i = 0; i < x.length; i++) {
             count=0
            for (j = 0; j < y.length; j++) {
                if (x[i] === y[i]) {

                    count++;
                }
            }
        }

        if(setCount===count){
            console.log("true")
        }

        else{
            console.log("false")
        }
    }

array([1, 2, 3], [3, 2, 1])