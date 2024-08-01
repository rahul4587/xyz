function countdown() {
    const eventDateStr = "12-08-2024";
    const [day, month, year] = eventDateStr.split("-");

    const eventDate = new Date(`${year}-${month}-${day}T00:00:00`).getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").style.display = "none";
        document.getElementById("party-message").style.display = "block";
    }
}

const countdownInterval = setInterval(countdown, 1000);
