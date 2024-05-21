function fitnessCenter(input){

    let visitors = Number(input[0]);

    let back = 0;
    let chest = 0;
    let abs = 0;
    let legs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let current = 1; current <= visitors; current++) {
        let currentStatus = (input[current]);
        switch (currentStatus) {
            case "Back" : back++; break;
            case "Abs" : abs++; break;
            case "Chest" : chest++; break;
            case "Legs" : legs++; break;
            case "Protein shake" : proteinShake++; break;
            case "Protein bar" : proteinBar++; break;
        
        }

        
    }
console.log (`${back} - back`)
console.log (`${chest} - chest`)
console.log (`${legs} - legs`)
console.log (`${abs} - abs`)
console.log (`${proteinShake} - protein shake`)
console.log (`${proteinBar} - protein bar`)
console.log (`${(((visitors - proteinBar - proteinShake) / visitors) * 100).toFixed(2)}% - work out`)
console.log (`${(((proteinBar + proteinShake) / visitors) * 100).toFixed(2)}% - protein`)

}
fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])