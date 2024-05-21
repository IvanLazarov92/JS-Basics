function challangeTheWeading(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let totalTables = Number(input[2]);

    let result = '';
    let tablesCount = 0;


    for (let m = 1; m <= men; m++) {


        for (let w = 1; w <= women; w++) {
            result += `(${m} <-> ${w})`
            tablesCount++
            if (tablesCount === totalTables) {
                console.log(result);
                return;
            }
            result += " "
        }
        
        

    }
    console.log(result);
}

challangeTheWeading(["5", "8", "40"])