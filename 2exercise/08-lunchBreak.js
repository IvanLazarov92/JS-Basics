function lunchBreak(input) {
    let serialName = input[0];
    let serialTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1/8
    let restTime = breakTime * 1/4
    let timeLeft = breakTime - lunchTime - restTime

    if (timeLeft >= serialTime) {
        let freeTime = Math.ceil(timeLeft - serialTime)
        console.log(`You have enough time to watch ${serialName} and left with ${freeTime} minutes free time.`);
    }
    
    if (timeLeft < serialTime) {
        let timeNeeded = Math.ceil(serialTime - timeLeft)
        console.log(`You don't have enough time to watch ${serialName}, you need ${timeNeeded} more minutes.`);
 
    }

}
    lunchBreak(["Game of Thrones", "60", "96"])