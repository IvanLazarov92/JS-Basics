function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let fahrenheit = Number((1.8 * celsius) + 32)
    let fahrenheitFormated = fahrenheit.toFixed(2)

    console.log(fahrenheitFormated);

}
celsiusToFahrenheit([25])