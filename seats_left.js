function seats_left() {
    let no_of_seats = 40
    let seats_taken = no_of_seats/2
    let day_count = (getFullYear() + getMonth() + getDate()) % 3
    seats_taken = seats_taken - (day_count * (seats_taken/3)) - ((seats_taken/3)/getHours())
    let seats_available = no_of_seats - seats_taken
    return(seats_available);   // The function returns the product of p1 and p2
 }
 
function main()
{
    let x = seats_left()
    console.log(x)
}
