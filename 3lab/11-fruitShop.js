function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);

    let totalPrice = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                totalPrice = qty * 2.50
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "apple") {
                totalPrice = qty * 1.20
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "orange") {
                totalPrice = qty * 0.85
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "grapefruit") {
                totalPrice = qty * 1.45
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "kiwi") {
                totalPrice = qty * 2.70
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "pineapple") {
                totalPrice = qty * 5.50
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "grapes") {
                totalPrice = qty * 3.85
                console.log(totalPrice.toFixed(2));
            } else {
                console.log("error");
            }
            
            break;

        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                totalPrice = qty * 2.70
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "apple") {
                totalPrice = qty * 1.25
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "orange") {
                totalPrice = qty * 0.90
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "grapefruit") {
                totalPrice = qty * 1.60
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "kiwi") {
                totalPrice = qty * 3.00
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "pineapple") {
                totalPrice = qty * 5.60
                console.log(totalPrice.toFixed(2));
            } else if (fruit === "grapes") {
                totalPrice = qty * 4.20
                console.log(totalPrice.toFixed(2));
            } else {
                console.log("error");
            }
           
            break;
        
        default : console.log("error");
        break;
    }
       
      
}
fruitShop(["tomato", "Tuesday", "2"])