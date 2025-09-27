// Abrir y cerrar modal
function abrirChatYAmigos() {
    const chatModal = document.getElementById('chatModal');
    chatModal.style.display = 'block';

    // Actualizamos el nombre del usuario en el chat al abrir
    const chatNombre = chatModal.querySelector('.nombre-usuario');
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuario && chatNombre) {
        chatNombre.textContent = usuario.nombre;
    }
}

function cerrarChatYAmigos() {
    document.getElementById('chatModal').style.display = 'none';
}

// Menu desplegable de estado
document.addEventListener("DOMContentLoaded", () => {
    const estadoDropdown = document.querySelector('.estado-dropdown');
    const menuEstado = document.querySelector('.menu-estado');
    const estadoActual = document.getElementById('estadoActual');

    if (estadoDropdown && menuEstado && estadoActual) {
        estadoDropdown.addEventListener('click', () => {
            menuEstado.style.display = menuEstado.style.display === 'block' ? 'none' : 'block';
        });

        menuEstado.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                estadoActual.textContent = li.dataset.estado + ' ▼';
                menuEstado.style.display = 'none';
            });
        });

        // Cerrar dropdown si clickeas fuera
        document.addEventListener("click", (e) => {
            if (!estadoDropdown.contains(e.target)) {
                menuEstado.style.display = 'none';
            }
        });
    }

    // Inicializar nombre del usuario logueado al cargar
    const chatNombre = document.querySelector("#chatModal .nombre-usuario");
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuario && chatNombre) {
        chatNombre.textContent = usuario.nombre;
    }
});
