function computerFirm(input) {
    let computers = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= computers; i++) {
        let computerData = Number(input[i]);
        let sales = computerData % 10; 
        let rating = Math.floor(computerData / 10);

        switch (sales) {
            case 2:
                totalSales += rating * 0;
                break;
            case 3:
                totalSales += rating * 0.5;
                break;
            case 4:
                totalSales += rating * 0.7;
                break;
            case 5:
                totalSales += rating * 0.85;
                break;
            case 6:
                totalSales += rating * 1;
                break;
        }

        totalRating += sales;
    }

    let averageRating = totalRating / computers;
    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}

computerFirm(["5", "122", "156", "202", "214", "185"]);