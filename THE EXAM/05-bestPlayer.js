function bestPlayer(input) {
    
    let index = 0;
    let command = input[index];
    index++

    let highestScore = 0;
    let highestScorePlayer = ""

    while (command !== "END") {
        let playerName = command;
        let playerScore = Number(input[index]);
        index++

        if (playerScore > highestScore){
            highestScore = playerScore;
            highestScorePlayer = playerName;
        }

        if (playerScore >= 10) {
            break;
        }

        command = input[index];
        index++;
        
       
        


    }
    console.log(`${highestScorePlayer} is the best player!`);
    if (highestScore >= 3) {
        console.log(`He has scored ${highestScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${highestScore} goals.`);
    }


}
bestPlayer(["Neymar","2", "Ronaldo","1", "Messi", "3", "END"])