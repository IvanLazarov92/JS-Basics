function concatenate(input) {
    let name = input[0];
    let familyName = input[1];
    let age = input[2];
    let town = input[3];

    console.log(`You are ${name} ${familyName}, a ${age}-years old person from ${town}.`);

}
concatenate(["Ivan", "Lazarov", "30", "Sofia"])