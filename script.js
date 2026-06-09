function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    let text = input.value.trim();
    if (text === "") return;

    // show user message
    chatBox.innerHTML += `<div class="user-message">${text}</div>`;

    input.value = "";

    // bot thinking
    let reply = brain(text);

    setTimeout(() => {
        chatBox.innerHTML += `<div class="bot-message">${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);
}

function brain(text) {

    text = text.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hey 😄 I am Ryaanai, your AI assistant!";
    }

    if (text.includes("name")) {
        return "I am Ryaanai 🖤 built for you.";
    }

    if (text.includes("help")) {
        return "I can chat, answer questions, and grow smarter over time 😎";
    }

    if (text.includes("dragon")) {
        return "🔥 Dragons are powerful creatures! Want a story?";
    }

    if (text.includes("chess")) {
        return "♟️ Chess tip: control the center of the board!";
    }

    // default smart-ish response
    return "Hmm 🤔 tell me more so I can understand better.";
}
