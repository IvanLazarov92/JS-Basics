function pcStore(input) {

    let cpuPriceUSD = Number(input[0]);
    let videoCardPriceUSD = Number(input[1]);
    let ramPriceUSD = Number(input[2]);
    let ramCount = Number(input[3]);
    let discountPercent = Number(input[4]);

    let cpuDiscount = (cpuPriceUSD * 1.57) * discountPercent;
    let cpuPriceLv = (cpuPriceUSD * 1.57) - cpuDiscount;

    let videoCardDisc = (videoCardPriceUSD * 1.57) * discountPercent;
    let videoCardLv = (videoCardPriceUSD * 1.57) - videoCardDisc;

    let ramPriceLv = (ramPriceUSD * 1.57) * ramCount;
    
    let totalMoneyNeededLv = ramPriceLv + videoCardLv + cpuPriceLv;
    console.log(`Money needed - ${totalMoneyNeededLv.toFixed(2)} leva.`);



}
pcStore(["500",
    "200",
    "80",
    "2",
    "0.05"])