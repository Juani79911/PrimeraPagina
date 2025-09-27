document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".type-formulario");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const password = document.getElementById("password").value.trim();
    const passwordConfirm = document.getElementById("passwordConfirm").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailConfirm = document.getElementById("emailConfirm").value.trim();
    const fechaNacimiento = document.getElementById("miCalendario").value.trim();

    // Validaciones
    if(password !== passwordConfirm){
      mensaje.textContent = "Las contraseñas no coinciden.";
      mensaje.style.color = "red";
      return;
    }

    if(email !== emailConfirm){
      mensaje.textContent = "Los correos electrónicos no coinciden.";
      mensaje.style.color = "red";
      return;
    }

    // Guardar usuario en localStorage
    const usuarioNuevo = {
      nombre,
      password,
      email,
      fechaNacimiento
    };

    // Guardamos usuarios como un array en localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuarioNuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensaje.textContent = "Registro exitoso. Redirigiendo al login...";
    mensaje.style.color = "green";

    setTimeout(() => {
      window.location.href = "../acceder/acceder.html"; // Ajusta la ruta según tu estructura
    }, 1500);
  });
});
