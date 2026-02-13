// ===== MÚSICA DE FONDO =====
const musica = new Audio('../assets/musica.mp3');
musica.loop = true;
musica.volume = 0.4;

let musicaIniciada = false;

document.addEventListener('click', () => {
    if (!musicaIniciada) {
        musica.play().catch(() => {});
        musicaIniciada = true;
    }
}, { once: true });

const btnMusica = document.getElementById('btnMusica');
if (btnMusica) {
    btnMusica.addEventListener('click', (e) => {
        e.stopPropagation();
        if (musica.paused) {
            musica.play();
            btnMusica.textContent = '⏸';
        } else {
            musica.pause();
            btnMusica.textContent = '🎵';
        }
    });
}

// ===== CORAZONES FLOTANTES =====
function crearCorazon() {
    const heart = document.createElement('div');
    heart.classList.add('flotante');
    heart.innerText = '⭐';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (20 + Math.random() * 40) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

// 👇 ESTA ES LA FUNCIÓN QUE USAS PARA EXPLOSIÓN DE CORAZONES
function masCorazones() {
    for (let i = 0; i < 50; i++) crearCorazon();
}

setInterval(crearCorazon, 600);

// ===== BUZÓN DE MENSAJE (SIN FRASES ALEATORIAS) =====
window.addEventListener('DOMContentLoaded', () => {
    const carta = document.querySelector('#carta .container');
    if (!carta) return;

    const buzon = document.createElement('div');
    buzon.classList.add('buzon-mensaje', 'mt-4');

    buzon.innerHTML = `
        <div class="buzon-icono">📬</div>
        <p class="buzon-texto">
            <!-- AQUÍ VA TU FRASE FIJA -->
        </p>
        <form method="POST" target="_blank" action="https://formsubmit.co/rodrigogonzalezindora@gmail.com">
            <input type="text" name="message" placeholder="Escribe tu mensaje aquí..." class="buzon-input" required>
            <input type="hidden" name="_captcha" value="false">
            <button type="submit" class="btn-buzon">Enviar 💌</button>
        </form>
    `;

    carta.appendChild(buzon);
});

// ===== MENSAJES SECRETOS (MODAL) =====
const mensajesSecretos = [
    "Eres ese pensamiento bonito que aparece sin avisar 💜",
    "Hay días en los que sonreír tiene tu nombre ✨",
    "Sin darte cuenta, haces mis días más lindos 🤍",
    "Si supieras lo especial que eres, sonreirías ahora mismo 💖",
    "Tu presencia, incluso en pensamiento, se siente como hogar 🌸",
    "Hay personas que no se olvidan… tú eres una de ellas 💫"
];

function mensajeSecreto() {
    const modal = document.getElementById('modalRomantico');
    const texto = modal.querySelector('p');

    const mensajeAleatorio = mensajesSecretos[
        Math.floor(Math.random() * mensajesSecretos.length)
    ];

    texto.textContent = mensajeAleatorio;
    modal.style.display = 'flex';

    // 👇 opcional pero queda bonito
    masCorazones();
}

function cerrarModal() {
    document.getElementById('modalRomantico').style.display = 'none';
}