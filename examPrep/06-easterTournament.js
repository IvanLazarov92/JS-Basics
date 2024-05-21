function easterTournament(input) {
 
    let easterBreadCounter = Number(input[0]);
    let highestPoints = 0;
    let nameWithMaxPoints = '';
    let index = 1;
    let currentRow = input[index];
 
 
    for (let current = 1; current <= easterBreadCounter; current++) {
 
        let currentPoints = 0;
        let name = input[index];
        index++;
        currentRow = input[index];
 
        while (currentRow !== 'Stop') {
            let points = Number(currentRow);
            currentPoints += points;
            index++;
            currentRow = input[index];
        }
        console.log(`${name} has ${currentPoints} points.`);
        index++;
        currentRow = input[index];
 
        if (currentPoints > highestPoints) {
            highestPoints = currentPoints;
            nameWithMaxPoints = name;
            console.log(`${name} is the new number 1!`);
        }
    }
    console.log(`${nameWithMaxPoints} won competition with ${highestPoints} points!`);
 
}
easterTournament(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])