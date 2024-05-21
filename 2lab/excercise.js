function tenisEquipment(input) {
    let tennisRackets = Number(input[0] * input[1]);
    let tennisShoes = Number(input[0] / 6);
    let totalShoes = Number(tennisShoes * input[2])
    let otherEquipment = Number(0.2 * (tennisRackets + totalShoes));
    let sum = (tennisRackets + totalShoes + otherEquipment);
    let djokovicPay = Math.trunc(sum / 8) 
    let sponsorsPay = Math.ceil(sum * 7 / 8)
        

    console.log(`Price to be paid by Djokovic ${djokovicPay}`);
    console.log(`Price to be paid by sponsors ${sponsorsPay}`);


}
tenisEquipment(["386", "7", "4"])
