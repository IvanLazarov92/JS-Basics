function calculateAverage(input) {
    let studentName = input[0];
    let grade = 1;
    let totalGrade = 0;
    let excluded = false;

    let i = 1;
    while (i < input.length) {
        let currentGrade = Number(input[i]);

        if (currentGrade >= 4) {
            totalGrade += currentGrade;
            grade++;
        } else {
            excluded = true;
            break;
        }

        if (grade === 13) {
            break;
        }

        i++;
    }

    if (excluded) {
        console.log(`${studentName} has been excluded at ${grade} grade`);
    } else {
        let averageGrade = (totalGrade / (grade - 1)).toFixed(2);

        if (grade === 13) {
            console.log(`${studentName} graduated. Average grade: ${averageGrade}`);
        } else {
            console.log(`${studentName} has been excluded at ${grade} grade`);
        }
    }
}
calculateAverage (["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])