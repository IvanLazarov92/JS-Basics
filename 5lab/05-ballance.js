function ballance(input) {
    
let totalMoney = 0;
let i = 0;
let nextPayment = input[i];

while (nextPayment !== "NoMoreMoney") {
    let nextPaymentNumer = Number(nextPayment)
    
    if (nextPaymentNumer < 0) {
        console.log("Invalid operation!");
        break;
    }

    totalMoney += nextPaymentNumer;
    i++;
    nextPayment = input[i];
    console.log(`Increase: ${nextPaymentNumer.toFixed(2)}`);
    
    
}
    
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}
ballance (["120", "45.55", "-150"])