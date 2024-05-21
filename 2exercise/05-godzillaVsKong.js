function godzillaVsKong(input) {
   let budget = Number(input[0]);
   let extras = Number(input[1]);
   let extrasDressPrice = Number(input[2]);
   
   let decor = 0.1 * budget
   
   let dressPrice = extras * extrasDressPrice; 

if (extras > 150) {
    dressPrice = dressPrice* 0.9;
}

    let totalPrice = decor + dressPrice;
    
if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

}else {
    let moneyNeeded = totalPrice - budget
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
}
}
godzillaVsKong(["15437.62", "186", "57.99"])
