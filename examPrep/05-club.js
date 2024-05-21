function club(input) {

    let clubWantedProffit = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sum = 0;


    while (command !== "Party!") {
        let currCocktail = input[index];
        let cocktailPrice = currCocktail.length;
        index++
        let currCocktailsCount = Number(input[index]);
        let currCocktailPrice = cocktailPrice * currCocktailsCount;



        if (currCocktailPrice % 2 !== 0) {
            currCocktailPrice *= 0.75;
        }
        sum += currCocktailPrice;
        
        if (sum >= clubWantedProffit) {
            console.log("Target acquired.");
            break;
        }
        index++;
        command = input[index];
        
        


    }
    if (clubWantedProffit > sum) {
        console.log(`We need ${(clubWantedProffit - sum).toFixed(2)} leva more.`);
        
    }

    console.log(`Club income - ${sum.toFixed(2)} leva.`);
}
club([
    "500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])