function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "Murilo-Proença" && senha === "murilo123") {
        alert('Você entrou!');
        sessionStorage.setItem("loggedIn", "true"); // Define uma variável de sessão para indicar que o usuário está autenticado
        window.location.href = "file:///C:/Users/User/Desktop/primeiroprojeto/rotas/paginainicial/paginainicial.html"; // Redireciona para a página home.html após o login bem-sucedido
    } else {
        alert('Login ou senha incorretos.');
    }
}
