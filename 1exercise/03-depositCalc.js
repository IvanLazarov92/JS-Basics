//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12

function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualIntrestPercent = Number(input[2]);

    let annualIntrestDecimal = annualIntrestPercent / 100;

    let sum = depositedSum + depositPeriod * ((depositedSum * annualIntrestDecimal) / 12);

    console.log(sum);
}   
depositCalculator(["200", "3", "5.7"])