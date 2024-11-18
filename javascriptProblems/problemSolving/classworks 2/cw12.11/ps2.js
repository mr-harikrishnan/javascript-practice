// Given a string count number of distinct vowels 
// in the String. Consider all the inputs to be in
// lowercase
// Input: cool
// Output: 1
// Explanation: Since o is coming twice, but we need distinct counts so 
// its only 1 Generate Javascript code which will print the result in console.log and generate 5 test cases

function words(str){
    let a=str;
    let count=0;
    let isa=true;
    let ise=true;
    let isi=true;
    let iso=true;
    let isu=true;
    for(i=0;i<a.length;i++){
       
       if(a[i]==="a"){
        if(isa){
            count++;
            isa=false;

        }
       }

       if(a[i]==="e"){
        if(ise){
            count++;
            ise=false;

        }
       }

       if(a[i]==="i"){
        if(isi){
            count++;
            isi=false;

        }
       }

       if(a[i]==="o"){
        if(iso){
            count++;
            iso=false;

        }
       }

       if(a[i]==="u"){
        if(isu){
            count++;
            isu=false;

        }
       }
    }
    console.log(count)

}
words("pease")