function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let roomType1 = "Studio";
    let roomType2 = "Apartment";

    let price1 = 0;
    let price2 = 0;

    switch (month) {
        case "May":
        case "October":
            if (roomType1 === "Studio") {
                price1 = nights * 50;
                if (nights > 14) {
                    price1 *= 0.70;
                } else if (nights > 7) {
                    price1 *= 0.95;
                }
            }
            if (roomType2 === "Apartment") {
                price2 = nights * 65;
                if (nights > 14) {
                    price2 *= 0.90;
                }
            }
            break;

        case "June":
        case "September":
            if (roomType1 === "Studio") {
                price1 = nights * 75.20;
                if (nights > 14) {
                    price1 *= 0.80;
                }
            }
            if (roomType2 === "Apartment") {
                price2 = nights * 68.70;
                if (nights > 14) {
                    price2 *= 0.90;
                }
            }
            break;

        case "July":
        case "August":
            if (roomType1 === "Studio") {
                price1 = nights * 76;
            
            }
            if (roomType2 === "Apartment") {
                price2 = nights * 77;
                if (nights > 14) {
                    price2 *= 0.90;
                }
            }
            break;
    }

    console.log(`${roomType2}: ${price2.toFixed(2)} lv.`);
    console.log(`${roomType1}: ${price1.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);