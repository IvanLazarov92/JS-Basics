function pcStore(input) {
 
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let procesors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let procesorsPrice = procesors * (0.35 * videoCardsPrice);
    let ramPrice = ram * (0.1 * videoCardsPrice);

    let sum = videoCardsPrice + procesorsPrice + ramPrice;
    
    if (videoCards > procesors) {
        let discount = 0.15 * sum;
        sum = sum - discount;
    }

    let moneyLeft = budget - sum;
    let moneyNeed = sum - budget;

    if (sum <= budget) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva more!`);
    }
}
pcStore(["920.45","3","1","1"])

