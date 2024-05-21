function highJump(input) {

let finalTargetJump = Number(input[0]);
let firstTargetJump = Number(finalTargetJump - 30);
let firstJump = Number(input[1]);
if (firstTargetJump < firstJump) {
    console.log("Success");
}else if (firstTargetJump >= firstJump) {
    console.log("Fail");
}
let secondTargetJump = (firstTargetJump + 5);
let secondJump = Number(input[2]);
if (secondJump > secondTargetJump) {
    console.log("Success");
}else if(secondJump <= secondTargetJump) {
    console.log("Fail");
}
let thirdTargetJump = (secondTargetJump + 5)
let thirdJump = Number(input[3]);
if (thirdJump > thirdTargetJump) {
    console.log("Succes");
}else if(thirdJump < thirdTargetJump) {
    console.log("False");
}
}





highJump(["231", "205", "212", "213", "228", "229", "230", "235"])