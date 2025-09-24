// Declaramos las variables

const  formulario = document.getElementById("formulario");
const input = document.getElementById("nombre");
const saludo = document.getElementById("saludo");
const eliminar = document.getElementById("borrar");


// Le damos un evento de escucha al formulario para que cada ves que le den guardar se guarde lo guardado en el input y lo muetre en h2 donde esta el id saludo



formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre= input.value.trim();

    if (nombre == "") {

        alert("Por fa deja de ser tan pato, y llena todos los espacios del formulario")

        return
    }

    localStorage.setItem("usuario", nombre);

    saludo.textContent = "Bienvenido " + nombre ;

    input.value = "";

});
    


// Para esta nueva funcion al documento le damos un evento de escucha donde si la pagina se reinicia en el elemento capturado con el id saludo nos muestre el mensaje 

document.addEventListener("DOMContentLoaded", () => {

    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
        saludo.textContent = "Bienvenido de nuevo " + usuarioGuardado;
    }

});

borrar.addEventListener("click", () => {

    localStorage.removeItem("usuario");

    saludo.textContent = "Bienvenido usuario indefinido"; 
});
