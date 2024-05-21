function safari(input){

    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let dayOfWeek = input[2];

    let totalFuel = fuelNeeded * 2.10;
    let guidePrice = 100;

    let totalMoneyNeeded = totalFuel + guidePrice

    if (dayOfWeek === "Saturday") {
        totalMoneyNeeded *= 0.90;

    } else {
        totalMoneyNeeded *= 0.80;
    }
   
    
    let moneyLeft = budget - totalMoneyNeeded;
    let moneyNeeded = totalMoneyNeeded - budget;
   

    if (budget > totalMoneyNeeded) {
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);

    } else {
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }



}
safari(["1000",
"10",
"Sunday"])