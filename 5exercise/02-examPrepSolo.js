function examPrep(input) {

    let poorGrades = Number(input[0]);
    
    let i = 1;
    let examScore = Number(input[i + 1]);
    let examName = input[i]
    i++

    let totalGrades = 0;

    let examSum = 0;

    let averageScore = examSum / totalGrades;

    let problems = 0;

    while (examName !== "Enough") {

        if (examScore <= 4) {
            problems++
        }
        examSum += examScore
        examName = input[i]
        examScore = Number(input[i + 1]);
        i += 2;
        totalGrades++

        if (problems >= poorGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }

        if (examName === "Enough") {
            console.log(`Average score: ${averageScore.toFixed}`)
            console.log(`Number of problems: ${totalGrades}`)
            console.log(`Last problem: ${examName}`)
            break;
        }











    }

}


examPrep([
    "3",
    "Money", "6",
    "Story", "4",
    "Spring Time", "5",
    "Bus", "6",
    "Enough"])