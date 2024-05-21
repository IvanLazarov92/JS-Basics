function skiTrip(input) {
    
    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];
    let nights = days - 1
    let price = 0;
    

    switch (room) {
        case "room for one person" : 
        price = nights * 18;
        break;
        
        case "apartment" :
        price = nights * 25;
        if (days < 10) {
            price *= 0.70
        } else if (days <= 15) {
            price *= 0.65
        } else {
            price *= 0.50
        }
        break;

        case "president apartment" :
        price = nights * 35;
        if (days < 10) {
            price *= 0.90
        } else if (days <= 15) {
            price *= 0.85
        } else {
            price *= 0.80
        }
        break;
    }

    if (evaluation === "positive") {
        price *= 1.25
    } else if (evaluation === "negative") {
        price *= 0.9
    }

    console.log(price.toFixed(2));

}
skiTrip(["14", "apartment", "positive"])