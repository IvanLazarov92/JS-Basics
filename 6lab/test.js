function test() {

    for (hour = 0; hour <= 23; hour++) {
        
        for (let minutes = 0; minutes <= 59; minutes++) {
           
            for (let sec = 0; sec <= 59 ; sec++) {
                console.log(`Time: ${hour} : ${minutes} : ${sec}`);
            }
        }
    }
}
test()