function fishTank(input) {

    let lenght = Number(input[0]);
    let wight = Number(input[1]);
    let hight = Number(input[2]);
    let precentSand = Number(input[3]);

    let fishTankVolume = lenght * wight * hight;
    let fishTankVolLiters = fishTankVolume * 0.001;
    let litersNeeded = fishTankVolLiters * (1 - 0.17);
 
    console.log(litersNeeded);
}
fishTank(["85", "75" ,"47" ,"17"])