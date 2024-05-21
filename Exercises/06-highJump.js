function highJump(input) {
    let targetJump = Number(input[0]);

    let fails = 0;
    let currTargetJump = targetJump - 30;
    

    for (let index = 1; index <= input.length + 2; index++) {

        let currJump = Number(input[index]);
        


        if (currJump > currTargetJump) {
            currTargetJump += 5;
            fails = 0;
            
        } else {
            fails++
            
        }
        if (fails === 3) {
            console.log(`Tihomir failed at ${currTargetJump}cm after ${index} jumps.`);
            return;
        }

        if (currJump > targetJump) {
            console.log(`Tihomir succeeded, he jumped over ${currTargetJump - 5}cm after ${index} jumps.`);
            return;
        }
        

        

    }



}

highJump(["200",
"150",
"160",
"170",
])