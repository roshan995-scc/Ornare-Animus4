const startTimerButton = document.getElementById("start-timer");
const timeInput = document.getElementById("time-input");
const countdownText = document.getElementById("countdown-text");

startTimerButton.addEventListener("click", () => {
    const time = parseInt(timeInput.value);
    if (isNaN(time) || time <= 0) {
        countdownText.textContent = "Please enter a valid time.";
        return;
    }

    let remainingTime = time * 60; // Convert minutes to seconds
    countdownText.textContent = formatTime(remainingTime);

    const interval = setInterval(() => {
        remainingTime--;
        countdownText.textContent = formatTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(interval);
            countdownText.textContent = "Time's up! Take a deep breath.";
        }
    }, 1000);
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
