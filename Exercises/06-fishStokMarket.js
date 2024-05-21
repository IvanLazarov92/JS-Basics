function fishMarket(input) {
    
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonito = Number(input[2]);
    let safrid = Number(input[3]);
    let calms = Number(input[4]);

    let calmsPrice = calms * 7.50;
    let bonitoPrice = bonito * (mackerelPrice + (0.6 * mackerelPrice));
    let safridPrice = safrid * (sprinklePrice + (0.8 * sprinklePrice));

    sum = (calmsPrice + bonitoPrice + safridPrice).toFixed(2)
    console.log(sum);
}
fishMarket(["6.90", "4.20", "1.5", "2.5", "1"])