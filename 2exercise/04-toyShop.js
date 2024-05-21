/*function toyShop(input) {
    
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let travelPrice = Number(input[0]);
    let totalPuzzles = Number(input[1]);
    let totaldolls = Number(input[2]);
    let totalTeddyBears = Number(input[3]);
    let totalMinions = Number(input[4]);
    let totalTrucks = Number(input[5]);

    let puzzlesProfit = puzzlePrice * totalPuzzles;
    let dollsProfit = dollPrice * totaldolls;
    let teddyBearsProfit = teddyBearPrice * totalTeddyBears;
    let minionsProfit = totalMinions * minionPrice;
    let trucksProfit = totalTrucks * truckPrice;

    let totalProfit = dollsProfit + trucksProfit + minionsProfit + puzzlesProfit + teddyBearsProfit
    let totalToys = Number(totalMinions + totalPuzzles + totalTeddyBears + totalTrucks + totaldolls)

    let discount = 0.25 * totalProfit

    if (totalToys > 50) {
        totalProfit -= discount
    }

    let storeRent = 0.1* totalProfit

    let grandTotal = totalProfit - storeRent
    let moneyLeft = Number(grandTotal - input[0]).toFixed(2)

    if (grandTotal > input[0]){
        console.log(`Yes! ${moneyLeft} lv left.`);
    }else {
        let moneyNeeded = (input[0] - grandTotal).toFixed(2)
        console.log(`Not enough money! ${moneyNeeded} lv needed.`);
    }

}
toyShop (["40.8","20","25","30","50","10"]) */

function toyShop(input) {
   
    let travelPrice = Number(input[0]);
    let totalPuzzles = Number(input[1]);
    let totaldolls = Number(input[2]);
    let totalTeddyBears = Number(input[3]);
    let totalMinions = Number(input[4]);
    let totalTrucks = Number(input[5]);
 
    let moneyEarned = (totalPuzzles * 2.60) + (totaldolls * 3) + (totalTeddyBears * 4.10) + (totalMinions * 8.20) + (totalTrucks * 2);

    let totalToys = (totalMinions + totalPuzzles + totalTeddyBears + totalTrucks + totaldolls);
    
    if (totalToys >= 50) {
        let discount = 0.25 * moneyEarned
        moneyEarned -= discount
    }


    let rentMoney = 0.1 * moneyEarned;
    moneyEarned -= rentMoney

    if (moneyEarned >= travelPrice) {
        let moneyLeft = (moneyEarned - travelPrice).toFixed(2)
        console.log(`Yes! ${moneyLeft} lv left.`);
    } else {
        let moneyNeeded = (travelPrice - moneyEarned).toFixed(2)
        console.log(`Not enough money! ${moneyNeeded} lv needed.`)
    }


}
toyShop(["40.8","20","25","30","50","10"])