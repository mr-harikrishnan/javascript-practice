let cars=["ford","bmw","audi","sumo"]

function carsType(n){
    for(i=n-1;i>=0;i--){//i=3 
        console.log(cars[i]);
    }
}
carsType(cars.length);