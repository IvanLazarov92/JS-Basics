function highJump(input) {

    let targetJump = Number(input[0]);
    let firstJump = Number(input[1]);
    let secondJump = Number(input[2]);
    let thirdJump = Number(input[3]);
    let fourthJump = Number(input[4]);
    let fifthJump = Number(input[5]);
    let sixthJump = Number(input[6]);
    let seventhJump = Number(input[7]);

    let firstJumpTarget = Number(targetJump - 30);
    if (firstJump > firstJumpTarget) {
        console.log(true);
    }else if (firstJumpTarget > firstJump) {
        console.log(false);
    }
    let secondJumpTarget = Number(firstJumpTarget + 5);
    if (secondJump > secondJumpTarget) {
        console.log(true);
    }else if (secondJumpTarget > secondJump) {
        console.log(false);
    }
    let thirdJumpTarget = Number(secondJumpTarget + 5);
    if (thirdJump > thirdJumpTarget) {
        console.log(true);
    }else if (thirdJumpTarget > thirdJump) {
        console.log(false);
    }
    let fourthJumpTarget = Number(thirdJumpTarget + 5);
    if (fourthJump > fourthJumpTarget) {
        console.log(true);
    }else if (fourthJumpTarget > fourthJump) {
        console.log(false);
    }
    let fifthJumpTarget = Number(fourthJumpTarget + 5);
    if (firstJump > firstJumpTarget) {
        console.log(true);
    }else if (firstJumpTarget > firstJump) {
        console.log(false);
    }
    let sixthJumpTarget = Number(fifthJumpTarget + 5);
    if (sixthJump > sixthJumpTarget) {
        console.log(true);
    }else if (sixthJumpTarget > sixthJump) {
        console.log(false);
    }
    let seventhJumpTarget = Number(sixthJumpTarget + 5);
    if (seventhJump > seventhJumpTarget) {
        console.log("Tihomir succeeded, he jumped over 231cm after 7 jumps.d");
    }else if (seventhJumpTarget > seventhJump) {
        console.log(false);
    }
    

}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"])

