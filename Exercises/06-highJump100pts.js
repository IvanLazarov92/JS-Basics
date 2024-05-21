function highJump(input) {
    let desiredHeight = Number(input[0]);
    let currentHeight = desiredHeight - 30;
    let failedJumps = 0;

    for (let jumps = 1; jumps < input.length; jumps++) {
        let jumpHeight = Number(input[jumps]);

        if (jumpHeight > currentHeight) {
            currentHeight += 5;
            failedJumps = 0;
        } else {
            failedJumps++;
        }

        if (failedJumps === 3) {
            console.log(`Tihomir failed at ${currentHeight}cm after ${jumps} jumps.`);
            return;
        }

        if (currentHeight > desiredHeight) {
            console.log(`Tihomir succeeded, he jumped over ${currentHeight - 5}cm after ${jumps} jumps.`);
            return;
        }
    }
}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])