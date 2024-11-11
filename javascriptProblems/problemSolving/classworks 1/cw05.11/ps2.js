// In an array of string, return all the string which start with the letter
//  'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali


function starta(a){

    for(i=0;i<a.length;i++){
        let sp=a[i].split("")
        if(sp[0]==="a" || sp[0]==="A"){
            console.log(a[i])
        }
    }

}
starta(["apple", "Ali", "mango","Brush"])