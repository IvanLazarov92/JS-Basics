function sumSeconds(input) {
    
    let firstRacerTime = Number(input[0]);
    let secondRacerTime = Number(input[1]);
    let thirdRacerTime = Number(input[2]);

    let totalTime = firstRacerTime + secondRacerTime + thirdRacerTime;
    
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
    }
    


}
sumSeconds(["35", "45", "44"])