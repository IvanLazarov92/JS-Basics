function triangle(input) {

    let a = Number(input[0]);
    let h = Number(input[1]);
    let triangleArea = Number(a * h / 2);
    let formatArea = triangleArea.toFixed(2)
    console.log(formatArea);

}
triangle(["20", "30"])