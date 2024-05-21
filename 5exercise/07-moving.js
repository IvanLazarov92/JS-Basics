function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let high = Number(input[2]);

    let totalVolume = width * length * high


    index = 3;
    let command = input[index];
    index++

    currVolume = 0;

    while (command !== "Done") {
        let boxes = Number(command)
        currVolume += boxes

        if (currVolume >= totalVolume) {
            let volumeNeeded = currVolume - totalVolume
            console.log(`No more free space! You need ${volumeNeeded} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++
    }

    if (command === "Done") {
        let volumeLeft = totalVolume - currVolume
        console.log(`${volumeLeft} Cubic meters left.`);
    }




}
moving(["10", "10", "2", "20", "20", "20", "20", "122"])