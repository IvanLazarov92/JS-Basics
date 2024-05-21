function trainingLab(input) {
    
    let whide = Number(input[0] * 100);
    let high = Number(input[1] * 100);

    let roomAreaCm = whide * high;
    let coridorCm = 100 * whide
    let oneWorkPlaceCm = 70 * 120


    let totalFreeArea = roomAreaCm - coridorCm

    let totalWorkPlaces = Math.trunc(totalFreeArea / oneWorkPlaceCm)

    console.log(totalWorkPlaces - 3);

}
trainingLab(["15", "8.9"])