function onTime(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arivalHour = Number(input[2]);
    let arivialMin = Number(input[3]);

    let totalExamTime = examHour * 60 + examMin;
    let totalArivalTime = arivalHour * 60 + arivialMin;

    let totalDiffTime = Math.abs(totalExamTime - totalArivalTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;

    let isOnTime = "";


    if (totalExamTime === totalArivalTime) {
        isOnTime = "On time"
        console.log(isOnTime);
    } else if (totalExamTime < totalArivalTime) {
        isOnTime = "Late"
        console.log(`${isOnTime}`)
        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            isOnTime = "On time"
            console.log(isOnTime);
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            isOnTime = "Early"
            console.log(isOnTime);
        } 
        
        if (totalDiffTime < 60) {
                console.log(`${totalDiffTime} minutes before the start`);
            } else {
                if (diffMin < 10) {
                    console.log(`${diffHour}:0${diffMin} hours before the start`);
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }
            }
        }
}
        onTime(["9", "30", "9", "50"])
