function library (input) {
    
let favBook = input[0];

let i = 1;
let currBook = input[i];
// i++

let booksChecked = 0;

while (currBook !== "No More Books") {
   

    if (currBook === favBook) {
        console.log (`You checked ${booksChecked} books and found it.`)
        break;
    }
    
    booksChecked++
    i++
    currBook = input[i]
    
    


    if (currBook === "No More Books"){
        console.log (`The book you search is not here!`)
        console.log (`You checked ${booksChecked} books.`)
        break;
    }

   

}

}
library (["Troy","Stronger","Life Style","Troy"])