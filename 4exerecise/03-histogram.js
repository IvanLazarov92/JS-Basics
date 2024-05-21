function histogram(input) {
    
    let numbers = Number(input[0]);

    let diapason1 = 0;
    let diapason2 = 0;
    let diapason3 = 0;
    let diapason4 = 0;
    let diapason5 = 0;

    for (let i = 1; i <= numbers; i++) {
        let curNum = Number(input[i]);
       
        if (curNum < 200) {
            diapason1++
        } else if (curNum <= 399) {
            diapason2++
         }else if (curNum <= 599) {
            diapason3++
        } else if (curNum <= 799) {
            diapason4++
        } else {
            diapason5++
        } 
    }

        let p1 = (`${((diapason1 / numbers) * 100).toFixed(2)}%`)
        let p2 = (`${((diapason2 / numbers) * 100).toFixed(2)}%`)
        let p3 = (`${((diapason3 / numbers) * 100).toFixed(2)}%`)
        let p4 = (`${((diapason4 / numbers) * 100).toFixed(2)}%`)
        let p5 = (`${((diapason5 / numbers) * 100).toFixed(2)}%`)
       
        console.log(p1);
        console.log(p2);
        console.log(p3);
        console.log(p4);
        console.log(p5);


}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])