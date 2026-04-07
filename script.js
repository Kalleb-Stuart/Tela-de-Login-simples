document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const termos = document.querySelector('#termos').checked;

    if (email === '' || senha === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!termos) {
        alert("Você precisa aceitar os termos.");
        return;
    }

    console.log("--- DADOS SALVOS ---");
    console.log("E-mail: " + email);
    console.log("Senha: " + senha); 
    console.log("--------------------");

    localStorage.setItem('ultimoLogin', email);

    alert("Login realizado com sucesso! Os dados foram enviados (simulação).");

    form.reset(); 
});