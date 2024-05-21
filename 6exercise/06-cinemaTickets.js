function cinemaTickets(input) {

    let studentTicketCount = 0;
    let standartTicketCount = 0;
    let kidsTicketCount = 0;

    let totalTickets = studentTicketCount + standartTicketCount + kidsTicketCount;


    let index = 0;
    let command = input[index];


    while (command !== "Finish") {
        let movieName = command;
        index++
        let ticketsForTheMovie = Number(input[index]);
        index++


        let seatsTaken = 0;

        while (seatsTaken < ticketsForTheMovie) {

            let ticketType = input[index]
            index++
            if (ticketType === "student") {
                studentTicketCount++;
            } else if (ticketType === "standard") {
                standartTicketCount++;
            } else if (ticketType === "kid") {
                kidsTicketCount++;
            } else {
                break;
            }
            totalTickets++;
            seatsTaken++;


        }
        let moviePercentage = (seatsTaken / ticketsForTheMovie) * 100;
        console.log(`${movieName} - ${moviePercentage.toFixed(2)}% full.`)
        
        command = input[index];
    
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTicketCount / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTicketCount / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTicketCount / totalTickets) * 100).toFixed(2)}% kids tickets.`);

    






}

cinemaTickets(["Taxi", "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard", "End",
    "Scary Movie", "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student", "Finish"])