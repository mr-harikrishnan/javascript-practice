function baterLevel(n){
while(n>0){
    
    if(n>20){
        console.log("Batery Level="+n);
        
    }

    else {
        console.log("Battery Level is Low")
    }
    n=n-5
}
}
baterLevel(100);