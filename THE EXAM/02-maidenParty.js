function maidenParty(input) {
    
    let maidenPartyPrice = Number(input[0]);
    let loveLetherCount = Number(input[1]);
    let waxRosesCount = Number(input[2]);
    let keyHoldersCount = Number(input[3]);
    let caricaturesCount = Number(input[4]);
    let luckySurpriseCount = Number(input[5]);

    let totalOrderedItems = loveLetherCount + waxRosesCount + keyHoldersCount + caricaturesCount + luckySurpriseCount;

    let loveLetherPrice = loveLetherCount * 0.60;
    let waxRosesPrice = waxRosesCount * 7.20;
    let keyHoldersPrice = keyHoldersCount * 3.60;
    let caricaturesPrice = caricaturesCount * 18.20;
    let luckySurprisePrice = luckySurpriseCount * 22.00;

    let totalSumBeforeDisc = waxRosesPrice + keyHoldersPrice + loveLetherPrice + luckySurprisePrice + caricaturesPrice;

    if (totalOrderedItems > 25) {
        totalSumBeforeDisc *= 0.65;
    }
    let totalSum = totalSumBeforeDisc * 0.90;

    if (totalSum > maidenPartyPrice) {
        let moneyLeft = totalSum - maidenPartyPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = maidenPartyPrice - totalSum;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }


    
    
}
maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"])