function direction(n) {
    switch (n) {
        case "north":
            console.log("Moved North. New position=south");
            break;

        case "south":
            console.log("Moved North. New position=west");
            break;

        case "west":
            console.log("Moved North. New position=east");
            break;

        case "east":
            console.log("Moved North. New position=north")
    }


}
direction("north");
