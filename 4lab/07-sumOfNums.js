function sumOfNums(input) {
    
    let num = input[0];
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        
        
        let singleNum = Number(num[index]);
        sum += singleNum;



    }

    console.log(`The sum of the digits is:${sum}`);

}
sumOfNums(["1234"])