function basketballEqp(input) {

    let trainingPrice = Number(input[0]);
    let basketballSneekers = (trainingPrice - (0.40 * input[0]));
    let basketballApparel = (basketballSneekers - (0.20 * basketballSneekers));
    let basketballBall = (basketballApparel / 4);
    let basketballAccesories = (basketballBall / 5);

    let totalPrice = trainingPrice + basketballAccesories + basketballApparel + basketballBall + basketballSneekers;

    console.log(totalPrice);

}
basketballEqp(["365"])