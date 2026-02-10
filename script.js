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