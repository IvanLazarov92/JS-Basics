function betweenNums(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];

    let result = 0;
    let evenOdd = "";



    switch (symbol) {
        case "+":
            result = n1 + n2;
            if (result % 2 === 0) {
                evenOdd = "even"
                } else {
                evenOdd = "odd"
                } 
            console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOdd}`);
            break;

        case "-":
            result = n1 - n2;
            if (result % 2 === 0) {
                evenOdd = "even"
                } else {
                evenOdd = "odd"
                } 
            console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOdd}`);
            break;

        case "*":
            result = n1 * n2;
            if (result % 2 === 0) {
                evenOdd = "even"
                } else {
                evenOdd = "odd"
                } 
            console.log(`${n1} ${symbol} ${n2} = ${result} - ${evenOdd}`);
            break;

        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }
            break;

        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
           } else {
            result = n1 % n2
            console.log(`${n1} % ${n2} = ${result}`);
           }
            break;

            default:
                console.log("Invalid symbol");
                return;


    }
    

}
betweenNums(["10", "1", "-"])