function firstProject(names){

    let firstName = names [0];
    let secondName = names[1];
    let lastName = names[2];

    console.log(firstName);
    console.log(secondName);
    console.log(lastName);
}
firstProject(["Iva","Rosi","Tanq"]);

function calculation(numbers){

    let firstNumber = 6;
    let secondNumber = 2;
    let result = firstNumber % secondNumber;

    console.log(result);

}
calculation();

function stringove(){

    let firstWord = "Happy ";
    let secondWord = "Weekend !";
    
    let result = firstWord + secondWord;

    console.log(result)

}
stringove()

function interpolaciq(){

    let name = "Ivo";
    let age = 30

    console.log(`My name is ${name} And my age is ${age+20} years old.`);
    
}
interpolaciq()

function convertInchInSm(input) {

    let inch = Number(input[0]);
    let santimeter = inch * 2.54;

console.log(santimeter);


}
convertInchInSm(["5"])


