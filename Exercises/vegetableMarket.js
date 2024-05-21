function vegetableMarket(input) {

    let vegetablesPerKilo = Number(input[0]);
    let fruitsPerKilo = Number(input[1]);
    let totalVegetables = Number(input[2]);
    let totalFruits = Number(input[3]);

    let vegPrice = vegetablesPerKilo * totalVegetables
    let fruitPrice = fruitsPerKilo * totalFruits

    let sumInLev = vegPrice + fruitPrice
    let sumInEuro = sumInLev / 1.94
    let sumInEuroFormated = sumInEuro.toFixed(2)

    console.log(sumInEuroFormated);


}
vegetableMarket(["0.194", "19.4", "10", "10"])