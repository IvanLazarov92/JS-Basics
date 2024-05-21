function cake(input) {
    
    let width = Number(input[0]);
    let length = Number(input[1]);

    let cakeSize = width * length

    let index = 2;
    let command = input[index];
    index++

    let peacesTook = 0;

    while (command !== "STOP") {
        let peaceOfCake = Number(command);
        cakeSize -= peaceOfCake;
        peacesTook += peaceOfCake


        if (cakeSize <= 0) {
        
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
    
        command = input[index];
        index++
    }
    if (command === "STOP") {
        console.log (`${cakeSize} pieces are left.`);
     }

}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"])