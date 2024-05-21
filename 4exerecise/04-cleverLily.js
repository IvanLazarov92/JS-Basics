function smartLily(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for (let curBurthday = 1; curBurthday <= age; curBurthday++) {
        if (curBurthday % 2 !== 0) {
            moneySaved += pricePerToy;
        } else {
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;

        }
    }

    if (moneySaved >= washerPrice) {
        let moneyLeft = moneySaved - washerPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = Math.abs(moneySaved - washerPrice);
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }

}
smartLily(["10", "170.00", "6"])