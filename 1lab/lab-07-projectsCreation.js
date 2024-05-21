//· "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."


function projectsCreation(input) {

    let name = input[0];
    let hoursNeeded = Number(input[1] * 3);
    let projects = Number(input[1]);

    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projects} project/s.`);
}
projectsCreation(["George", "4"])