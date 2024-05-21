function vacation (input) {

    let vacationCost = Number(input[0]);
    let totalMoney = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++
    
    let money = Number(input[index]);
    index++

    let totalTimeSpend = 0;
    let days = 0;

    while (vacationCost > totalMoney) {

        if (command === "save") {
            days++
            totalMoney += money;
            if (totalMoney >= vacationCost) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        } else if(command === "spend") {
            days++
            totalTimeSpend++
            totalMoney -= money;
            if (totalMoney < 0) {
                totalMoney = 0;
            }

        } else if (totalTimeSpend >= 5) {
            console.log("You can't save the money."); 
            console.log(`${days}`);
            break;
        }

        command = input[index];
        index++

        money = Number(input[index]);
        index++
    }




}
vacation (["110","60","spend","10","spend","10","spend","10","spend","10","spend", "10"])