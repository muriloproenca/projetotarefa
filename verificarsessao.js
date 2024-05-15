document.addEventListener("DOMContentLoaded", function() {
    var loggedIn = sessionStorage.getItem("loggedIn");

    if (!loggedIn || loggedIn === "false") {
        alert("Você não está autenticado. Faça login primeiro.");
        window.location.href = "login.html"; // Redireciona de volta para a página de login
    }
});


