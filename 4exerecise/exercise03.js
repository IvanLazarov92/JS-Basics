function aluminumJoinery(input) {

    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let deliveryOrNot = input[2];

    let totalPrice = 0;



    switch (joineryType) {
        case "90X130":
            totalPrice = joineryCount * 110
            if (joineryCount >= 60) {
                totalPrice *= 0.92;
            } else if (joineryCount >= 30) {
                totalPrice *= 0.95;
            }
            break;
        case "100X150":
            totalPrice = joineryCount * 140
            if (joineryCount >= 80) {
                totalPrice *= 0.90;
            } else if (joineryCount >= 40) {
                totalPrice *= 0.94;
            }
            break;
        case "130X180":
            totalPrice = joineryCount * 190
            if (joineryCount >= 50) {
                totalPrice *= 0.88;
            } else if (joineryCount >= 20) {
                totalPrice *= 0.93;
            }
            break;
        case "200X300":
            totalPrice = joineryCount * 250
            if (joineryCount >= 50) {
                totalPrice *= 0.86;
            } else if (joineryCount >= 25) {
                totalPrice *= 0.91;
            }
            break;
        default:

    }

    if (deliveryOrNot === "With delivery") {
        totalPrice += 60;

    }

    if (joineryCount > 99) {
        totalPrice *= 0.96
    }

    if (joineryCount <= 10) {
        console.log("Invalid order");
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["5", "100X150", "With delivery"])