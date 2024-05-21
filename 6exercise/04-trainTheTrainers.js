function trainTheTrainers(input) {

    let judgeCount = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let totalGradeSum = 0;
    let gradeCount = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let presentationGradeSum = 0;

        for (let curJudge = 1; curJudge <= judgeCount; curJudge++) {
            let grade = Number(input[index]);
            index++
            presentationGradeSum += grade;


        }
        let avgPresentationGrade = presentationGradeSum / judgeCount;

        console.log(`${presentationName} - ${avgPresentationGrade.toFixed(2)}.`);

        totalGradeSum += avgPresentationGrade;
        gradeCount++


        command = input[index];
        index++;
    }
    let avgGrade = totalGradeSum / gradeCount

    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}


trainTheTrainers(["2",
    "While-Loop", "6.00", "5.50",
    "For-Loop", "5.84", "5.66",
    "Finish"])