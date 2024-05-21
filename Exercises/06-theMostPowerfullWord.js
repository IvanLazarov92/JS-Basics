function christmasTournament(input) {

    let days = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++

    let winCount = 0;
    let looseCount = 0;
    
    let moneyEarned = 0;

    while (command <= days) {
        let currSport = command;
        index++;


        while (currSport !== "Finish") {
            let winOrLoose = input[index];
            index++

            
            if (winOrLoose === win) {
                moneyEarned += 20;

            }



        }
    }
}
christmasTournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])