function house(input) {

    let flowerType = input[0];
    let flowerQty = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
   

    switch (flowerType) {
        case "Roses": 
            price = flowerQty * 5; 
            if (flowerQty > 80) {
                price *= 0.90
            }
            break;
        case "Dahlias": 
            price = flowerQty * 3.80; 
            if (flowerQty > 90) {
                price *= 0.85
            }
            break;
        case "Tulips": 
            price = flowerQty * 2.80; 
            if (flowerQty > 80) {
                price *= 0.85
            }
            break;
        case "Narcissus": 
            price = flowerQty * 3
            if (flowerQty < 120) {
                price *= 1.15 ;
            }
            break;
        case "Gladiolus": 
            price = flowerQty * 2.50
            if (flowerQty < 80) {
                price *= 1.20
            }
            break;
    }

    let moneyNeeded = Math.abs(budget - price);
    let moneyLeft = budget - price;

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerQty} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    }else if (budget < price) {
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }

}
house(["Roses", "55", "250"])