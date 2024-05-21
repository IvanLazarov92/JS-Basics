function example(input) {

    let maxPower = Number(input[0]);

    for (let a = 0; a <= maxPower ; a+=2 ) {
    
        console.log(Math.pow(2,a));
    }


}
example(["10"])