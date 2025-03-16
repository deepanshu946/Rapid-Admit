function handleUserInput() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    appendMessage(userInput, "user");

    document.getElementById("userInput").value = "";

    setTimeout(function() {
        let botResponse = getBotResponse(userInput);
        appendMessage(botResponse, "bot");
        speak(botResponse);
    }, 500);
}

// Function to start speech recognition
function startVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US'; // Set the language
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = function(event) {
            const userInput = event.results[0][0].transcript;
            appendMessage(userInput, "user");

            setTimeout(function() {
                let botResponse = getBotResponse(userInput);
                appendMessage(botResponse, "bot");
                speak(botResponse);
            }, 500);
        };

        recognition.onerror = function(event) {
            console.error("Speech recognition error: ", event.error);
        };
    } else {
        console.log("Speech Recognition not supported in this browser.");
    }
}

// Function to append messages to the chatbox
function appendMessage(message, sender) {
    let chatbox = document.getElementById("chatbox");
    let messageElem = document.createElement("div");
    messageElem.className = "chat-message " + sender;
    messageElem.textContent = message;
    chatbox.appendChild(messageElem);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to get bot responses (basic AI logic)
function getBotResponse(input) {
    if (input.toLowerCase().includes("hello")) {
        return "Hi there! How can I help you?";
    } else if (input.toLowerCase().includes("how are you")) {
        return "I'm just a bot, but I'm here to help!";
    } else {
        return "Sorry, I didn't understand that.";
    }
}

// Function for Text-to-Speech
function speak(text) {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1; // Adjust the rate (speed) of speech
        speechSynthesis.speak(utterance);
    } else {
        console.log("Speech Synthesis not supported in this browser.");
    }
}

// Event listeners
document.getElementById("sendBtn").addEventListener("click", handleUserInput);
document.getElementById("voiceBtn").addEventListener("click", startVoiceRecognition);

// Modal functionality
function openModal(type) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").textContent = type === 'opd' ? "Book OPD Appointment" : "Book Bed";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Booking Confirmed!");
    closeModal();
});