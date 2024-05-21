function graduation(input) {

    let studentName = input[0];

    let i = 1;
    let currClass = Number(input[i])

    let sum = 0;

    let excluded = 0;

    let grade = 1;

    while (currClass <= 12) {
        if (currClass >= 4.00) {
            i++;
            sum += currClass;
            grade++;
            currClass = Number(input[i])
        } else {
            i++
            sum += currClass;
            excluded++;
            // grade++;
            currClass = Number(input[i])
            
        }

        if (excluded >= 2) {
            console.log(`${studentName} has been excluded at ${grade} grade`);
            return;
        }

    }

    console.log(`${studentName} graduated. Average grade: ${(sum / (grade - 1)).toFixed(2)}`);
}
graduation (["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])