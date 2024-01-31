// Função para alternar entre abrir e fechar o menu lateral
function toggleCollapseMenu() {
    const menu = document.getElementById("menu");
    const menuWidth = menu.style.width;

    if (menuWidth === "250px") {
        closeMenu(menu); // Fecha o menu se estiver aberto
    } else {
        openMenu(menu); // Abre o menu se estiver fechado
    }
}
// Função para abrir o menu lateral
function openMenu(menu) {
    menu.style.width = "250px";
    menu.classList.add("opened"); // Adiciona a classe ao abrir o menu
}
// Função para fechar o menu lateral
function closeMenu(menu) {
    menu.style.width = "0";
    menu.classList.remove("opened"); // Remove a classe ao fechar o menu
}
// Evento quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    // Seção de áudio
    const playButton = document.querySelector('.play-button');
    const audio = document.getElementById('audio');
    const progressBar = document.querySelector('.progress');

    // Evento de clique no botão de reprodução/pausa
    playButton.addEventListener('click', function () {
        // Alterna entre reproduzir e pausar o áudio
        audio.paused ? audio.play() : audio.pause();
    });

    // Atualiza a barra de progresso do áudio
    audio.addEventListener('timeupdate', function () {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
    });
});

// Seção de vídeo
const btnPlayVideo = document.getElementById('btn-play-video');
const video = document.getElementById('myVideo');
const playIcon = document.querySelector('.play-video svg');
const textPlayVideo = document.getElementById('text-playVideo');

// SVGs para o ícone de play e pause
const playSVG = `
    <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
`;
const pauseSVG = `
<svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19M16 5V19" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
// Variável para controlar se o vídeo já foi iniciado
let videoStarted = false;

// Função para alternar entre play e pause no vídeo
function togglePlayPause() {
    if (!videoStarted) {
        // Inicia o vídeo quando o botão de play for pressionado pela primeira vez
        video.play();
        videoStarted = true;
    }

    if (video.paused || video.ended) {
        // Alterna para o ícone de pause e pausa o vídeo
        playIcon.innerHTML = pauseSVG;
        textPlayVideo.textContent = 'Pause Video';
        video.play();
    } else {
        // Alterna para o ícone de play e pausa o vídeo
        playIcon.innerHTML = playSVG;
        textPlayVideo.textContent = 'Play Video';
        video.pause();
    }
}

// Evento de clique no botão de play/pause do vídeo
btnPlayVideo.addEventListener("click", togglePlayPause);

// Evento quando o vídeo termina
video.addEventListener("ended", function () {
    // Volta para o ícone de play ao final do vídeo
    playIcon.innerHTML = playSVG;
    textPlayVideo.textContent = 'Play Video';
});