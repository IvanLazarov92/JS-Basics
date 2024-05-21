function vacantionBookList(input) {

let bookPages = Number(input[0]);
let pageNumbersPerHR = Number(input[1]);
let days = Number(input[2]);

let sum = (bookPages / pageNumbersPerHR) / 2;
//let hoursNeeded = bookPages / pageNumbersPerHR;
//let hoursPerDay = hoursNeeded / days;


//console.log(hoursPerDay);
console.log(sum);
}
vacantionBookList(["212", "20", "2"])