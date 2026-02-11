(function verificarLogin() {
    const paginasProtegidas = [
        "tecnologia.html",
        "capacitacao.html",
        "participacao.html"
    ];

    const paginaAtual = window.location.pathname.split("/").pop();
    const logado = localStorage.getItem("logado");

    if (paginasProtegidas.includes(paginaAtual) && logado !== "true") {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "index.html";
    }
})();
function deslogar() {
    localStorage.removeItem("logado");
    // ou: localStorage.setItem("logado", "false");

    alert("Você saiu da sua conta.");
    window.location.href = "index.html";
}
