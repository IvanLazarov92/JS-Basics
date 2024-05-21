function equalSums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = "";

    for (let currNum = startNum; currNum <= endNum; currNum++) {
        let currNumStr = currNum.toString();

        let oddPossitionSum = 0;
        let evenPositionSum = 0;

        for (let index = 0; index < currNumStr.length; index++) {
            let digit = Number(currNumStr[index]);
            if (index % 2 === 0) {
                evenPositionSum += digit;
            } else {
                oddPossitionSum += digit;
            }

        }
        if (evenPositionSum === oddPossitionSum) {
            result += currNumStr + ` `;
        }

    }
    console.log(result);
}
equalSums(["123456", "124000"])