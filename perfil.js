const usuarioCreado = document.getElementById("usuarioCreado");

document.addEventListener("DOMContentLoaded", () => {

    const h2 = localStorage.getItem("usuario");

    if (h2) {
        usuarioCreado.textContent = "Bienvenido de nuevo " + h2;
    }
});