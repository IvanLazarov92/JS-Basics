function finalCompetition(input) {

    let dancersCount = Number(input[0]);
    let score = Number(input[1]);
    let seasone = input[2];
    let country = input[3];

    let totalPoints = 0;

    switch (country) {
        case "Bulgaria":
            totalPoints = dancersCount * score;
            if (seasone === "summer") {
                totalPoints *= 0.95;
            } else {
                totalPoints *= 0.92;
            }
            break;
        case "Abroad":
            totalPoints = (dancersCount * score) + (0.5 * (dancersCount * score));
            if (seasone === "summer") {
                totalPoints *= 0.90;
            } else {
                totalPoints *= 0.85;
            }
            break;

    }

    let moneyForCharity = totalPoints * 0.75;
    let moneyForDancers = (totalPoints - moneyForCharity) / dancersCount;

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);



}
finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"])