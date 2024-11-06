function leapYear(year){
    if(year%4==0 || year%400==0){
        console.log("y");
    }

    else if(year%100==0){
        console.log("n")
    }

    else(console.log("n"))
}
leapYear(2022);