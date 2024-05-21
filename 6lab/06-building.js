function building(input) {
    
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    

    for (let a = floors; a > 0; a--) {
        let currRow = "";
        for (let b = 0; b < rooms; b++) {
            if (a === floors) {
                currRow += `L${a}${b} ` ;
            }else if (a % 2 === 0) {
                currRow += `O${a}${b} ` ;
            } else {
                currRow += `A${a}${b} ` ;
            }
            
        }
        console.log(currRow);
    }
}
building(["6", "4"])