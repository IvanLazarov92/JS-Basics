function coinsANdDolars(input) {
    
    let coins1lv = Number(input[0]);
    let coins2lv = Number(input[1]);
    let dolars5lv = Number(input[2]);
    let sum = Number(input[3]);

    // let sumCount = 0;
    // let result = "";
    
    for (let lv1 = 0; lv1 <= coins1lv; lv1++) {
        for (let lv2 = 0; lv2 <= coins2lv; lv2++) {
            for (let lv5 = 0; lv5 <= dolars5lv; lv5++) {
                let currentSum = lv1 * 1 + lv2 * 2 + lv5 * 5;
                if (currentSum === sum) {
                    console.log(`${lv1} * 1 lv. + ${lv2} * 2 lv. + ${lv5} * 5 lv. = ${sum} lv.`);
                // result = `${lv1} * 1 lv. + ${lv2} * 2 lv. + ${lv5} * 5 lv. = ${sum} lv.`
                // console.log(result);
                // if (sumCount === sum) {
                //     console.log(result);
                //     break;
                // }
                
                
            }
            
        }
        
    }
    
}
}
coinsANdDolars(["3", "2", "3", "10"])