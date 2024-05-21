function tennisRank(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let currPoints = 0;
    let winCount = 0;



    for (i = 2; i <= input.length; i++) {
        let result = input[i]



        switch (result) {
            case "W":
                currPoints += 2000
                winCount++
                break;
            case "F":
                currPoints += 1200
                break;
            case "SF":
                currPoints += 720
                break;


        }

    }

    console.log(`Final points: ${currPoints + startingPoints}`);
    console.log(`Average points: ${Math.floor(currPoints / tournaments)}`);
    console.log(`${((winCount / tournaments) * 100).toFixed(2) }%`);
}
tennisRank(["5", "1400", "F", "SF", "W", "W", "SF"])