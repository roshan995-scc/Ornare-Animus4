// Select the form and result display
const form = document.getElementById("anxiety-form");
const result = document.getElementById("result");

// Define anxiety levels
const anxietyLevels = [
    { range: [0, 5], message: "Your anxiety level is very low. Keep up the positive mindset also try out our meditation corner!" },
    { range: [6, 10], message: "Your anxiety level is mild. Take time to relax and recharge consider reading our journals." },
    { range: [11, 15], message: "Your anxiety level is moderate. Consider practicing mindfulness talk to a freind and share your thoughts." },
    { range: [16, 20], message: "Your anxiety level is high. It's important to seek support and focus on self-care consider consulting a well trained therapist from our enourmous list of trained therapist." },
];

// Add event listener for form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Calculate total score
    const formData = new FormData(form);
    let totalScore = 0;

    for (let [key, value] of formData.entries()) {
        totalScore += parseInt(value, 10);
    }

    // Determine anxiety level
    let anxietyMessage = "Unable to determine your anxiety level.";
    for (let level of anxietyLevels) {
        if (totalScore >= level.range[0] && totalScore <= level.range[1]) {
            anxietyMessage = level.message;
            break;
        }
    }

    // Prepare result content
    const resultContent = `
        <p class="score-text">Your anxiety score is <strong>${totalScore}</strong>.</p>
        <p class="message-text">${anxietyMessage}</p>
    `;

    // Add animation: Clear previous result, fade-in new result
    result.style.opacity = "0"; // Hide result
    result.innerHTML = resultContent;
    setTimeout(() => {
        result.style.opacity = "1"; // Fade-in result
    }, 300);
});
