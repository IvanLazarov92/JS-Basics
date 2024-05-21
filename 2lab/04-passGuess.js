function guessThePassword (input) {
    let password = input[0];
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else
    console.log("Wrong password!");
}
guessThePassword(["qwerty", "s3cr3t!P@ssw0rd", "s3cr3t!p@s"])