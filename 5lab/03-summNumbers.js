function sumNumbers(input) {
    
let number = Number(input[0]);

let sum = 0;

let i = 1;
let currNumber = Number(input[i]);

while (sum < number) {
    
    sum += currNumber;
    i++;
    currNumber = Number(input[i]);

}


console.log(sum);



}
sumNumbers (["20", "1", "2", "3", "4", "5", "6"])