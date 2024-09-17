function battery(tb){
    let lb=20;
    while(tb>lb){
        console.log("your battery level is="+tb+"%");
        tb=tb-5;

        
        }
        if(tb==lb){
            while(tb>0){
                console.log("YOUR BATERY LEVEL IS BELLOW 20%");
                tb=tb-5;
               
            }
    }

  
}

battery(100)
