// Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals.
//  Use a for loop to display the altitude after each interval.

function airplaneClimbs(ft,intervel){
    count=0;
    total=ft/intervel;
    for(i=1;i<=intervel;i++){
        count=count+total;
        console.log(count);
    }
}
airplaneClimbs(1000,10)




