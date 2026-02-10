let emailRegistrado = "";
let senhaRegistrada = "";

function registrarUsuario() {
    const email = document.getElementById("regEmail").value;
    const senha = document.getElementById("regSenha").value;
    const confirmarSenha = document.getElementById("regConfirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não conferem!");
        return;
    }

    emailRegistrado = email;
    senhaRegistrada = senha;

    console.log("Email registrado:", emailRegistrado);
    console.log("Senha registrada:", senhaRegistrada);

    alert("Registro realizado com sucesso!");

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalRegistrar")
    );
    modal.hide();
}

function alterarSenha() {
    const email = document.getElementById("resetPassEmail").value;
    const senha = document.getElementById("resetPassSenha").value;
    const confirmarSenha = document.getElementById("resetPassConfirmarSenha").value;

    if (email !== emailRegistrado) {
        alert("E-mail inválido!");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não conferem!");
        return;
    }

    senhaRegistrada = senha;

    console.log("Email registrado:", emailRegistrado);
    console.log("Senha alterada:", senhaRegistrada);

    alert("Senha alterada com sucesso!");

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalAlterarSenha")
    );
    modal.hide();
}
function entrar(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === emailRegistrado && senha === senhaRegistrada) {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Email ou senha inválidos!");
    }
}

