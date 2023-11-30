/** Função abrir o menu lateral*/
function toggleCollapseMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
        menu.classList.remove("opened"); // Remove a classe ao fechar o menu
    } else {
        menu.style.width = "250px";
        menu.classList.add("opened"); // Adiciona a classe ao abrir o menu
    }
}
/** Reproduzir o audio da seção portfolio colmeia rec*/
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('.play-button');
    const audio = document.getElementById('audio');
    const progressBar = document.querySelector('.progress');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('timeupdate', function () {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
    });
});

/** Reproduzir o audio da seção de video*/
const btnPlayVideo = document.getElementById('btn-play-video');
const video = document.getElementById('myVideo');
const playIcon = document.querySelector('.play-video svg');
const textPlayVideo = document.getElementById('text-playVideo');

// Guardar o ícone de play para uso posterior
const playSVG = `
    <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
`;

// Estilo do ícone de play/pause


// Função para alternar ícone de play/pause
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playIcon.innerHTML = playSVG; // Aplica o ícone de play
        textPlayVideo.textContent = 'Pause Video';
    } else {
        video.pause();
        playIcon.innerHTML = `
            <svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19M16 5V19" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        textPlayVideo.textContent = 'Play Video';
    }
}

// Adicionar evento de clique no botão play/pause
btnPlayVideo.addEventListener("click", togglePlayPause);

// Atualizar ícone e texto quando o vídeo termina
video.addEventListener("ended", function () {
    playIcon.innerHTML = playSVG; // Aplica o ícone de play ao final do vídeo
    playIcon.setAttribute('style', iconStyle); // Aplica o estilo ao ícone de play ao final do vídeo
    textPlayVideo.textContent = 'Play Video';
});