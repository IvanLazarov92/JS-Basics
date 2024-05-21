function pool(input){

    let ppl = Number(input[0]);
    let entryTax = Number(input[1]);
    let loungerPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalTaxEntry = ppl * entryTax;
    let totalLoungerPrice = (Math.ceil(0.75 * ppl) * loungerPrice);
    let totalUmbrellaPrice =(Math.ceil(ppl / 2) * umbrellaPrice)

    let totalMoney = totalTaxEntry + totalLoungerPrice + totalUmbrellaPrice
    // console.log(totalUmbrellaPrice); 
    console.log(`${totalMoney.toFixed(2)} lv.`);
}
pool(["21",
"5.50",
"4.40",
"6.20"])