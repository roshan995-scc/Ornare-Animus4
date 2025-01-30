document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.querySelector('button');

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        sendBtn.disabled = true;

        // Show typing indicator
        showTypingIndicator();

        try {
            // Send request to OpenAI proxy
            const response = await fetch(OPENAI_PROXY_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: `You are a compassionate mental health supporter. Respond with empathy and understanding.
                    User: ${message}
                    Therapist:`,
                    max_tokens: 100,
                    temperature: 0.7,
                }),
            });

            const data = await response.json();
            const botResponse = data.choices[0].text.trim();
            const safeResponse = filterResponse(botResponse);

            // Add bot response
            addMessage(safeResponse, 'bot');

        } catch (error) {
            console.error('API Error:', error);
            addMessage("I'm having trouble responding right now. Could you try again?", 'bot');
        } finally {
            // Hide typing indicator
            hideTypingIndicator();
            sendBtn.disabled = false;
        }
    }

    function filterResponse(text) {
        // Crisis detection
        const crisisKeywords = ['suicide', 'self-harm', 'kill myself'];
        if (crisisKeywords.some(keyword => text.toLowerCase().includes(keyword))) {
            return `I'm deeply concerned about your safety. Please contact the National Suicide Prevention Lifeline at 988 or visit https://988lifeline.org immediately. You matter.`;
        }

        // Ensure response length is appropriate
        return text.length > 300 ? 
            `${text.substring(0, 300)}... [continuing with care]` : 
            text;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        `;
        chatBox.appendChild(typingDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicators = document.getElementsByClassName('typing-indicator');
        while (indicators.length > 0) indicators[0].remove();
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => e.key === 'Enter' && sendMessage());
});