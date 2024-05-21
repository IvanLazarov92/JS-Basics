function worldSwimingRecord(input) {
    
    let worldRecord = Number(input[0]);
    let distaceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let totalSeconds = distaceInMeters * secondsPerMeter
    
    let waterResistance = (Math.floor(distaceInMeters / 15) * 12.5)

    let totalTime = (totalSeconds + waterResistance).toFixed(2)

    let secondsNeeded = (totalTime - worldRecord).toFixed(2);

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    }else {
        console.log(`No, he failed! He was ${secondsNeeded} seconds slower.`);
    }

}
worldSwimingRecord(["55555.67", "3017", "5.03"])