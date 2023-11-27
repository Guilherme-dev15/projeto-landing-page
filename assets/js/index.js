function toggleCollapseMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
        menu.classList.remove("opened"); // Remove a classe ao fechar o menu
    } else {
        menu.style.width = "250px";
        menu.classList.add("opened"); // Adiciona a classe ao abrir o menu
    }
}

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