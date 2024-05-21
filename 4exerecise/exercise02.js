function addBags(input) {
    
let priceOver20Kg = Number(input[0]);
let baggageWeight = Number(input[1]);
let daysTillTrip = Number(input[2]);
let baggageCount = Number(input[3]);

let taxes = 0;

if (baggageWeight < 10) {
    taxes = (0.2 * priceOver20Kg) * baggageCount
} else if (baggageWeight <= 20) {
    taxes = (0.5 * priceOver20Kg) * baggageCount
} else {
    taxes = priceOver20Kg * baggageCount
}

if (daysTillTrip < 7) {
    taxes *= 1.4
} else if (daysTillTrip <= 30) {
    taxes *= 1.15
} else {
    taxes *= 1.10
}

console.log(`The total price of bags is: ${taxes.toFixed(2)} lv.`);

}
addBags(["30", "18", "15", "2"])