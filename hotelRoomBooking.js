function hotelRoomBooking (days) {

    let totalCost = 1;

    if (days <= 10) {
        totalCost = days * 500;
    }
    else if (days >= 11 && days <= 20) {
        let first10DaysCost = 10 * 500;
        let remainingDays = days - 10;
        let remainingDaysCost = remainingDays * 300;
        totalCost = first10DaysCost + remainingDaysCost;
    }
    else {
        let first10DaysCost = 10 * 500;
        let second10DaysCost = 10 * 300;
        let remainingDays = days - 20;
        let remainingDaysCost = remainingDays * 100;
        totalCost = first10DaysCost + second10DaysCost + remainingDaysCost;
    }
    return totalCost;
}
let bookingDays = 23;
let costs = hotelRoomBooking (bookingDays);
console.log (costs);