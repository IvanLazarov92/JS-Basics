function minNumber(input) {

    let i =  0;
let currNumber = input[i];
let minNumber = Number.MAX_VALUE;


while (currNumber !== 'Stop') {
    let currNumberNumber = Number(currNumber)

    if (currNumberNumber < minNumber){
        minNumber = currNumberNumber
        
    }
    i++;
    currNumber = input[i];
    
}
console.log(minNumber);

}

minNumber (["-1", "-2", "Stop"])