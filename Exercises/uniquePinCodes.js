function uniquePinCodes(input) {
    
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    let isEven = false;
    let isSpecial = false;

    for (let i = 1; i <= n1; i++) {
        if (i % 2 === 0) {
            isEven = true
            } else{
                continue;
            }
        for (let j = 2; j <= n2; j++) {
            if (j % 4 === 0 || j % 6 === 0 || j > 7){
                continue;
            } else {
                isSpecial = true
            }
            
            for (let k = 1; k <= n3; k++) {
                if (k % 2 === 0) {
                    isEven = true
                    } else{
                        continue;
                    }

                    console.log(`${i} ${j} ${k}`);
            }
        
        }
        
    }
   
}
uniquePinCodes(["2", "2", "8"])