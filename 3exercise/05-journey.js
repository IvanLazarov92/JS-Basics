function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let budgetNeeded = 0;
    let journeyType = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            budgetNeeded = 0.3 * budget
            journeyType = "Camp"
        } else {
            budgetNeeded = 0.7 * budget
            journeyType = "Hotel"
        }

    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            budgetNeeded = 0.4 * budget
            journeyType = "Camp"
        } else {
            journeyType = "Hotel"    
            budgetNeeded = 0.8 * budget
            
        }

    } else {
        destination = "Europe";
        budgetNeeded = 0.9 * budget
        journeyType = "Hotel" 
    }


    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyType} - ${budgetNeeded.toFixed(2)}`);


}
journey(["1500", "summer"])