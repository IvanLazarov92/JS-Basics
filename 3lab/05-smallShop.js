function smallShop(input) {
    
    let product = input[0];
    let city = input[1];
    let productQty = Number(input[2]);

    let finalResult = 0;

    if (city === "Sofia") {

        switch (product) {
            case "coffee" : finalResult = productQty * 0.50; break;
            case "water" : finalResult = productQty * 0.80; break;
            case "beer" : finalResult = productQty * 1.20; break;
            case "sweets" : finalResult = productQty * 1.45; break;
            case "peanuts" : finalResult = productQty * 1.60; break;

        }

    }else if (city === "Plovdiv") {
        switch (product) {
            case "coffee" : finalResult = productQty * 0.40; break;
            case "water" : finalResult = productQty * 0.70; break;
            case "beer" : finalResult = productQty * 1.15; break;
            case "sweets" : finalResult = productQty * 1.30; break;
            case "peanuts" : finalResult = productQty * 1.50; break;

        }
        

    }else if (city === "Varna") {
        switch (product) {
            case "coffee" : finalResult = productQty * 0.45; break;
            case "water" : finalResult = productQty * 0.70; break;
            case "beer" : finalResult = productQty * 1.10; break;
            case "sweets" : finalResult = productQty * 1.35; break;
            case "peanuts" : finalResult = productQty * 1.55; break;

        }

    }


console.log(finalResult);

}
smallShop(["coffee", "Varna", "2"])