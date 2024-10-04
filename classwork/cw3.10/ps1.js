

function char(n) {
    let conv = n.toUpperCase()
    if (conv === "A") {
        return true;
    }


    else if (conv >= 'D' && conv <= 'F') {
        return false;
    }

    else {
        return 1;
    }



}
console.log(char("F"))