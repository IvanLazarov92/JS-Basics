function combinations(input) {

    let finalNumber = Number(input[0]);
    let count = 0;

    for (let firstNum = 0; firstNum <= finalNumber; firstNum++) {
        for (let secondNum = 0; secondNum <= finalNumber; secondNum++) {
            for (let thirdNum = 0; thirdNum <= finalNumber; thirdNum++) {


                let sum = firstNum + secondNum + thirdNum
                if (sum === finalNumber) {
                    count++
                }
            }

        }

    }
    console.log(count);

}
combinations(["25"])