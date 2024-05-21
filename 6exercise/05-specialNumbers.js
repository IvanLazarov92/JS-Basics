function specialNumbers(input) {
    let n = Number(input[0]);
    let result = '';

    for (let num = 1111; num <= 9999; num++) {
        let currentNumber = num;
        let isSpecial = true;

        while (currentNumber > 0) {
            let digit = currentNumber % 10;
            currentNumber = Math.trunc(currentNumber / 10);

            if (n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += num + ' ';
        }
    }

    console.log(result);
}
specialNumbers(["3"])