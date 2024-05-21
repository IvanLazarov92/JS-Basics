function computerFirm(input) {

    let computers = Number(input[0]);

    let rating2Percent = 0;
    let rating3Percent = 0;
    let rating4Percent = 0;
    let rating5Percent = 0;
    let rating6Percent = 0;

    let rating2count = 0;
    let rating3count = 0;
    let rating4count = 0;
    let rating5count = 0;
    let rating6count = 0;
    
    let ratingsCount = 0;

    
    
    for (let i = 1; i <= computers; i++) {
        let type = Number(input[i]);
        let rating = type % 10;
        let count = (type - rating) / 10;
        

        if (rating === 2) {
            rating2count += rating;
        } else if (rating === 3) {
            rating3Percent += count;
            rating3count += rating;
        } else if (rating === 4) {
            rating4Percent += count;
            rating4count += rating;
        } else if (rating === 5) {
            rating5Percent += count;
            rating5count += rating;
        } else if (rating === 6) {
            rating6Percent += count;
            rating6count += rating;
        }

        ratingsCount++
    }

    
    let rating3 = 0.5 * rating3Percent
    let rating4 = 0.70 * rating4Percent
    let rating5 = 0.85 * rating5Percent
    let rating6 = rating6Percent
    
    let totalComputers = rating2Percent + rating3 + rating4  +rating5 + rating6
    let averageRating =  (rating2count + rating3count + rating4count + rating5count + rating6count) / ratingsCount



    console.log(totalComputers.toFixed(2));
    console.log(averageRating.toFixed(2));
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])