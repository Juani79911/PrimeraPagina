document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".type-formulario");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioValido = usuarios.find(
      u => u.email === email && u.password === password
    );

    if(usuarioValido){
      localStorage.setItem("usuarioLogueado", JSON.stringify({ nombre: usuarioValido.nombre }));
      window.location.href = "../pagina.html"; // Ajusta la ruta
    } else {
      mensaje.textContent = "Correo o contraseña incorrectos.";
      mensaje.style.color = "red";
    }
  });
});

/* Usuarios:
test@correo.com
Pedro1234
coroneljuani27@gmail.com
Nacho1234
 */

