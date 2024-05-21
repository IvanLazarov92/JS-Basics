function trekkingMania(input) {
    
let groupsCount = Number(input[0]);

let musala = 0;
let monblan = 0;
let kilimandjaro = 0;
let k2 = 0;
let everest = 0;

let totalPeople = 0;

for (let i = 1; i < input.length; i++) {
    
    let currPeople = Number(input[i]);

    if (currPeople <= 5){
        musala += currPeople
        totalPeople += currPeople
    } else if (currPeople <= 12) {
        monblan += currPeople
        totalPeople += currPeople
    } else if (currPeople <= 25) {
        kilimandjaro +=currPeople
        totalPeople += currPeople
    } else if (currPeople <= 40) {
        k2 += currPeople
        totalPeople += currPeople
    } else {
        everest += currPeople
        totalPeople += currPeople
    }
  
}
        console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`)
        console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`)
        console.log(`${((kilimandjaro / totalPeople) * 100).toFixed(2)}%`)
        console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`)
        console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`)

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])