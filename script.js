function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    let text = input.value.trim();

    if (!text) return;

    chatBox.innerHTML += `
        <div class="user-message">${text}</div>
    `;

    input.value = "";

    setTimeout(() => {

        let reply = brain(text);

        chatBox.innerHTML += `
            <div class="bot-message">${reply}</div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);
}

function brain(text) {

    text = text.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hey 😄 I'm RyaanGPT. What can I help you with today?";
    }

    if (text.includes("who are you")) {
        return "I am RyaanGPT 🖤 A futuristic AI assistant built to help, chat and think with you.";
    }

    if (text.includes("dragon")) {
        return "🔥 Dragons are legendary. Want me to create a dragon story or game idea?";
    }

    if (text.includes("game")) {
        return "🎮 I can help build games, ideas, bosses, powers, or cool mechanics.";
    }

    if (text.includes("anime")) {
        return "😎 Anime mode activated. Want action, mystery, fantasy, or detective style?";
    }

    if (text.includes("sad")) {
        return "🖤 I’m here. Want to talk about it?";
    }

    return "Interesting 🤔 Tell me more so I can understand better.";
}
