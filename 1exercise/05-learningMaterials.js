// • Пакет химикали - 5.80 лв.

// • Пакет маркери - 7.20 лв.

// • Препарат - 1.20 лв (за литър)

function learningMaterials(input) {

    let pencils = (input[0] * 5.80);
    let markers = (input[1] * 7.20);
    let detergent = (input[2] * 1.20);

    let totalPrice = pencils + markers + detergent;
    let discount = 0.25 * totalPrice;
    let totalDiscountedPrice = totalPrice - discount;

 

    console.log(totalDiscountedPrice);


}
learningMaterials(["2","3","4","25"])