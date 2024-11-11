let score = 0;
let history = [];
let users = {};
let currentUser   = null;

document.getElementById('spin-button').onclick = function() {
    const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍀'];
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById('reel1').innerText = reel1;
    document.getElementById('reel2').innerText = reel2;
    document.getElementById('reel3').innerText = reel3;

    if (reel1 === reel2 && reel2 === reel3) {
        score += 10;
        history.push(`Ganaste 10 puntos!`);
    } else {
        history.push(`Perdiste!`);
    }

    document.getElementById('score').innerText = `Puntaje: ${score}`;
    document.getElementById('history').innerText = history.join('\n');
};

document.getElementById('register-button').onclick = function() {
    const username = document.getElementById('username').value;
    if (username && !users[username]) {
        users[username] = { score: 0 };
        currentUser   = username;
        alert(`Usuario ${username} registrado!`);
    } else {
        alert('Nombre de usuario no válido o ya existe.');
    }
};
