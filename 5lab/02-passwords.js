function passwords(input) {
    
let username = input[0];
let passwords = input[1];

let index = 2;
let data = input[index];

while (data !== passwords) {
    index++
    data = input[index]

}

console.log(`Welcome ${username}!`);


}
passwords(["Nakov","1234","Pass","1324","1234"])