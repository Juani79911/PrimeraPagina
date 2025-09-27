document.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    const usuarioLi = document.querySelector(".usuario > a"); // Izquierda
    const navbar = document.querySelector(".navbar ul");

    const accederLi = document.querySelector(".acceder"); // Link "Acceder"

    if (usuario) {
        // Cambiamos el texto del link principal (izquierda)
        usuarioLi.textContent = usuario.nombre;

        // Ocultamos el link de "Acceder"
        if (accederLi) {
            accederLi.style.display = "none";
        }

        // Creamos un li a la derecha con solo "Cerrar sesión"
        const usuarioDerechaLi = document.createElement("li");
        usuarioDerechaLi.classList.add("usuario-derecha", "dropdown");
        usuarioDerechaLi.style.marginLeft = "auto"; // Empuja a la derecha

        const linkDerecha = document.createElement("a");
        linkDerecha.textContent = usuario.nombre;
        linkDerecha.href = "#";

        const submenuDerecha = document.createElement("ul");
        submenuDerecha.classList.add("submenu");

        const cerrarSesionLi = document.createElement("li");
        const cerrarSesionLink = document.createElement("a");
        cerrarSesionLink.textContent = "Cerrar sesión";
        cerrarSesionLink.href = "#";
        cerrarSesionLink.addEventListener("click", () => {
            localStorage.removeItem("usuarioLogueado");
            window.location.reload();
        });

        cerrarSesionLi.appendChild(cerrarSesionLink);
        submenuDerecha.appendChild(cerrarSesionLi);
        usuarioDerechaLi.appendChild(linkDerecha);
        usuarioDerechaLi.appendChild(submenuDerecha);

        navbar.appendChild(usuarioDerechaLi);
    } else {
        // Si no hay usuario logueado, mostramos "Usuario" y "Acceder" normalmente
        if (usuarioLi) {
            usuarioLi.textContent = "Usuario";
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".navbar .dropdown > a");

  dropdowns.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evita que el enlace salte arriba

      const parent = link.parentElement;

      // Cierra otros menús si quieres que solo 1 esté abierto
      document.querySelectorAll(".navbar .dropdown").forEach(item => {
        if (item !== parent) {
          item.classList.remove("active");
        }
      });

      // Alterna el menú actual
      parent.classList.toggle("active");
    });
  });
});



