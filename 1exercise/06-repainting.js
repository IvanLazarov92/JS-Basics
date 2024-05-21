// · Предпазен найлон - 1.50 лв. за кв. метър

// · Боя - 14.50 лв. за литър

// · Разредител за боя - 5.00 лв. за литър

function repainting(input) {

    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);

    let extraPaintQty = 0.1 * paintQty;
    let totalPaintQty = paintQty + extraPaintQty;

    let toatlNylonQty = nylonQty + 2;
    let materialPrice = totalPaintQty * 14.50 + toatlNylonQty * 1.50 + thinnerQty * 5 + 0.40;
    let workersPayPerHour = 0.3 * materialPrice;
    let totalWorkersPay = workHours * workersPayPerHour;

    console.log(materialPrice + totalWorkersPay);


}
repainting(["10", "11", "4", "8"])