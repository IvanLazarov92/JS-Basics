function numsDiv(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let sum = 0;

    for (let num = n1; num <= n2; num++) {
        if (num % 9 === 0) {
            sum += num;

        }
    }
    
    console.log(`The sum: ${sum}`);
    
    for (let num = n1; num <= n2; num++) {
        if (num % 9 === 0) {
            console.log(num);
        }
    }
}
numsDiv(["100", "200"])