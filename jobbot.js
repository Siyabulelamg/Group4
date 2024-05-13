const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');


function sendMessageToDialogflow(message) {
 
}


function displayMessage(message, sender) {
    const messageElement = document.createElement('li');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}


sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        displayMessage(userMessage, 'user');
        sendMessageToDialogflow(userMessage);
        userInput.value = ''; 
    }
});


function receiveMessageFromDialogflow(response) {
    const botMessage = response; 
    displayMessage(botMessage, 'bot');
}


