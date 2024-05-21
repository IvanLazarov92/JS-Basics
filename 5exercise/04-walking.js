function walking(input) {

    let index = 0;
    let command = input[index];
    index++;

    let stepsCount = 0;


 

    while (command !== "Going home") {
        let steps = Number(command);
        stepsCount += steps;


        if (stepsCount >= 10000) {
            let stepsAbove = stepsCount - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsAbove} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index]);
         stepsCount += stepsToHome;

        if (stepsCount >= 10000) {
            console.log(`Goal reached! Good job!`);
            let stepsAbove = stepsCount - 10000;
            console.log(`${stepsAbove} steps over the goal!`);
        } else {
            let stepsNeeded = 10000 - stepsCount;
            console.log(`${stepsNeeded} more steps to reach goal.`);
        }


    }



}




walking(["1500", "300", "2500", "3000", "Going home", "200"])