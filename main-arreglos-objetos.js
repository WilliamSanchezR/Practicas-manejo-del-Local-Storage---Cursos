// Declaramos las variables

const formulario = document.getElementById("formulario");
const inputCurso = document.getElementById("curso");
const inputProfesor = document.getElementById("profesor");
const inputPrecio = document.getElementById("precio");
const inputCiudad = document.getElementById("ciudad");
const inputCupo = document.getElementById("cupo");
const h2 = document.getElementById("mensaje-curso");
const borrar = document.getElementById("borrar-curso");


// Le damos un evento de escucha al formulario para que cada ves que le den guardar se guarde lo guardado en el input y lo muetre en h2 donde esta el id saludo

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const curso=inputCurso.value.trim();
    const profesor=inputProfesor.value.trim();
    const precio=inputPrecio.value.trim();
    const ciudad=inputCiudad.value.trim();
    const cupo=inputCupo.value.trim();

    if (curso === "" || profesor ==="" || precio === "" || ciudad == "" || cupo === "") {
        alert("Por favor llena todo los espacios del formulario")
        return
    }


// en el ejericio anterior solo era un valor ahora estamos alimentando un objeto con sus diferentes claves y valores

    const nuevoCurso = {
        nombre : curso,
        profesor : profesor,
        precio : precio,
        ciudad : ciudad,
        cupo : cupo
    };

// capturamos el arrglo existente en el localStorage o lo creamos vacio si no existe ninguno previamente

    const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];

// Agregamos al arreglo [] cursoGuardados {} el nuevo curso  

    cursosGuardados.push(nuevoCurso);

    localStorage.setItem("cursos", JSON.stringify(cursosGuardados));

    formulario.reset();

    const cursoCrear = localStorage.getItem("curso");

    const objetoCurso = JSON.parse(cursoCrear); //realizamos un JSON.parse para transformar una cadena texto a un objeto y que se pueda a usar en Js
    
    h2.innerHTML = "curso: " + objetoCurso.nombre + '<br>' + " profesor: " + objetoCurso.profesor + '<br>' + " precio: " + objetoCurso.precio + '<br>' + " ciudad: " + objetoCurso.ciudad + '<br>' + " cupo: " + objetoCurso.cupo;

});

document.addEventListener("DOMContentLoaded", () => {

    const cursoCrear = localStorage.getItem("curso");

    if (cursoCrear) {

        const objetoCurso = JSON.parse(cursoCrear); //realizamos un JSON.parse para transformar una cadena texto a un objeto y que se pueda a usar en Js
        
        h2.innerHTML = "curso: " + objetoCurso.nombre + '<br>' + " profesor: " + objetoCurso.profesor + '<br>' + " precio: " + objetoCurso.precio + '<br>' + " ciudad: " + objetoCurso.ciudad + '<br>' + " cupo: " + objetoCurso.cupo;
    }
});

borrar.addEventListener("click", () => {

    localStorage.removeItem("cursos");

    h2.textContent = "No tienes cursos guardados";
});
