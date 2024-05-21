function barcodeGenerator(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let result = "";

    for (let currNumber = startNumber; currNumber <= endNumber; currNumber++) {
        let currNumStr = currNumber.toString();
        let hasEvenDigit = false;

        for (let index = 0; index < currNumStr.length; index++) {
            let digit = Number(currNumStr[index]);

            if (digit % 2 === 0) {
                hasEvenDigit = true;
                break;
            }
        }

        if (!hasEvenDigit) {
            result += currNumber + " ";
        }
    }

    console.log(result);
}

barcodeGenerator(["2345", "6789"])