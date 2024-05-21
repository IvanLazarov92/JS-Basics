function printPyramid(input) {
    let n = Number(input[0]);
    let currentNumber = 1;
    for (let row = 1; row <= n; row++) {
        let curRow = '';
        for (let col = 1; col <= i; col++) {
            if (currentNumber <= n) {
                curRow += currentNumber + ' ';
                currentNumber++;
            } else {
                break;
            }
        }
        console.log(row);
    }
}

printPyramid(["12"]);