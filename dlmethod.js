// teams win or loss by DL methodDeclare variables teamScore, targetScore, and oversLeft.
//  If the teamScore is greater than or equal to 
//  targetScore, 
//  print "Team wins by DL method" 
//  If teamScore is less than targetScore 

//  but oversLeft is greater than 0, 
//  print "Match to be continued" 
//  If teamScore is less than targetScore and 
//  oversLeft is 0, 
//  print "Team loses by DL method"


let teamScore = 150;
let targetScore = 145;
let oversLeft = 0;
DLMethod(teamScore, targetScore, oversLeft)
function DLMethod(teamScore, targetScore, oversLeft) {
    if (teamScore >= targetScore) {
        console.log("Team wins by DL method")
    }

    else if (teamScore < targetScore && oversLeft > 0) {
        console.log("Match to be continued");
    }

    else {
        console.log("Team loses by DL method")
    }
}
