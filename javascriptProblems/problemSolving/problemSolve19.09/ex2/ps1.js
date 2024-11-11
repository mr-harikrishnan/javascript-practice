// Create a login system where a user provides a username
//  and password. If both are correct, print "Access Granted"; otherwise, print "Access Denied."

function loginSystem(userNAme,password){
    if(userNAme=="Harikrishnan"&&password=="Hari@2004"){
        console.log("Access Granted");
    }
    else{
        console.log("Access Denied.")
    }
}
loginSystem("Harikrishnan","Hari@2004")