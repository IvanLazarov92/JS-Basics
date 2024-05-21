function cinema(input) {

    let = ticketType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0

    if (ticketType === "Premiere") {
        income = rows * columns * 12.00;

    } else if (ticketType === "Normal") {
        income = rows * columns * 7.50

    } else if (ticketType === "Discount") {
        income = rows * columns * 5.00
    }
    console.log(income.toFixed(2))
}
cinema(["Premiere", "10", "12"])