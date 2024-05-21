function oscars(input) {

    let actorName = input[0];
    let startPoints = Number(input[1]);
    let judgeCount = Number(input[2]);

    let totalPoints = startPoints;

    for (i = 3; i < input.length; i += 2) {

        let judgeName = input[i]
        let judgePoints = Number(input[i + 1])

        let judgeScore = (judgeName.length * judgePoints) / 2
        totalPoints += judgeScore

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    } 
    let neededPoints = (1250.5 - totalPoints).toFixed(1);
    console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);

}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])