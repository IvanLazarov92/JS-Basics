function maxNumber(input) {
    
let i =  0;
let currNumber = input[i];
let minNumber = -999999999;


while (currNumber !== 'Stop') {
    let currNumberNumber = Number(currNumber)

    if (currNumberNumber > maxNumber){
        maxNumber = currNumberNumber
        
    }
    i++;
    currNumber = input[i];
    
}
console.log(maxNumber);

}
maxNumber(["-1", "-2", "Stop"])