function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commission = 0;

    if (sales < 0) {
        console.log("error");
        return;
    }

    if (sales <= 500) {
        switch (city) {
            case "Sofia":
                commission = 0.05 * sales;
                break;
            case "Varna":
                commission = 0.045 * sales;
                break;
            case "Plovdiv":
                commission = 0.055 * sales;
                break;
            default:
                console.log("error");
                return;
        }
    } else if (sales <= 1000) {
        switch (city) {
            case "Sofia":
                commission = 0.07 * sales;
                break;
            case "Varna":
                commission = 0.075 * sales;
                break;
            case "Plovdiv":
                commission = 0.08 * sales;
                break;
            default:
                console.log("error");
                return;
        }
    } else if (sales <= 10000) {
        switch (city) {
            case "Sofia":
                commission = 0.08 * sales;
                break;
            case "Varna":
                commission = 0.10 * sales;
                break;
            case "Plovdiv":
                commission = 0.12 * sales;
                break;
            default:
                console.log("error");
                return;
        }
    } else {
        switch (city) {
            case "Sofia":
                commission = 0.12 * sales;
                break;
            case "Varna":
                commission = 0.13 * sales;
                break;
            case "Plovdiv":
                commission = 0.145 * sales;
                break;
            default:
                console.log("error");
                return;
        }
    }

    console.log(commission.toFixed(2));
}

tradeCommissions(["Plovdiv", "-20"]);
