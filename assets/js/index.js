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
