function touristAgency(input) {

    let city = input[0];
    let offerType = input[1];
    let vipOrNo = input[2];
    let days = Number(input[3]);

    let pricePerDay = 0;
    let totalPrice = 0;
   

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    }


    switch (city) {
        case "Bansko":
        case "Borovets":

            switch (offerType) {
                case "noEquipment":
                    pricePerDay = 80;
                    if (vipOrNo === "yes") {
                        pricePerDay *= 0.95;
                    }
                    break;
                case "withEquipment":
                    pricePerDay = 100;
                    if (vipOrNo === "yes") {
                        pricePerDay *= 0.90;
                    }
                    break;
                default:
                    console.log("Invalid input!");
                    return;
            }
            break;
        case "Varna":
        case "Burgas":
            switch (offerType) {
                case "noBreakfast":
                    pricePerDay = 100;
                    if (vipOrNo === "yes") {
                        pricePerDay *= 0.93;
                    }
                    break;
                case "withBreakfast":
                    pricePerDay = 130;
                    if (vipOrNo === "yes") {
                        pricePerDay *= 0.88;
                    }
                    break;
                default:
                    console.log("Invalid input!");
                    return;
            }
            break;



        default:
            console.log("Invalid input!");
            return;




    }
    totalPrice = days * pricePerDay;
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);







}




touristAgency(["Borovets",
"noEquipment",
"yes",
"6"])   