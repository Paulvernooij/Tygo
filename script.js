let userId = 1; // Simpele user ID voor test

function loadNext() {
    fetch('/get_question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId })
    })
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            const { text_and_question } = data;

            // Splits tekst en vragen
            const [text, ...questions] = text_and_question.split('\n');
            document.getElementById('text').innerText = text;

            const questionsDiv = document.getElementById('questions');
            questionsDiv.innerHTML = ''; // Leeg de oude vragen

            questions.forEach((q, index) => {
                const button = document.createElement
