function agencyProfit(input) {
    
let companyName = input[0];
let adultTicketsCount = Number(input[1]);
let childTicketCount = Number(input[2]);
let adultTicketsPrice = Number(input[3]);
let tax = Number(input[4]);

let proffitAdultTicket = adultTicketsCount * (adultTicketsPrice + tax) ;
let proffitChildTicket = childTicketCount * (0.30 * adultTicketsPrice + tax);

let totalProffit = (0.20 * (proffitAdultTicket + proffitChildTicket)).toFixed(2)

console.log(`The profit of your agency from ${companyName} tickets is ${totalProffit} lv.`);

}
agencyProfit(["WizzAir", "15", "5", "120", "40"])