//един кв. м. е 7.61 л
//18% отстъпка от крайната цен
//

function yardGreening(input) {
    
    let greeningPrice = input[0] * 7.61;
    let discount = 0.18 * greeningPrice

    console.log(`The final price is: ${greeningPrice - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);


}
yardGreening(["550"])