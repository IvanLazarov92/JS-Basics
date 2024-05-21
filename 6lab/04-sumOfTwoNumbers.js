function sumOfTwoNums(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let isFound = false

    for (let first = n1; first <= n2; first++) {
        for (let second = n1; second <= n2; second++) {
            let sum = first +second
            combinations++

            if (sum === magicNumber) {

                console.log(`Combination N:${combinations} (${first} + ${second} = ${sum})`);
                isFound = true;
                break;
            }

        }


        if (isFound) {
            break;
        } 
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNums(["23",

"24",

"20"])