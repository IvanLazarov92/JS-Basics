function radiantToDegree(input) {
    let radiant = (input[0]);
    let degree = radiant * 180 / Math.PI;

    console.log(degree);

}
radiantToDegree(["3.1416"])