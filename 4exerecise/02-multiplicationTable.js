function multiplicationTable(input) {
    
    const multiplicator = Number(input[0]);

    for (let num = 1; num <= 10; num++) {
       
        console.log(`${num} * ${multiplicator} = ${num * multiplicator}`);
    }
    
}
multiplicationTable(["5"])