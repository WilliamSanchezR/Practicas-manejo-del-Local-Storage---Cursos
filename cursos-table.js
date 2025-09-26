// CAPTURAR LAS VARIABLES

    const tablaBody = document.querySelector("#tablaCursos tbody");

// Luego como en este index mostraremos los cursos guardados en total tendremos que darle un evento cada vez que se recargue la paguina

    document.addEventListener("DOMContentLoaded", ()=> {

// Luego agregamos una constante donde se transforme la linea de texto a un array con el JSON.parse

        const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];

// Despues hacemos una funcion, que sera un forEach donde se recorrera cada objeto separando cada dato, en este forEach contruiremos las filas con sus respectivas casillas que se agregaran en la tabla.

        cursosGuardados.forEach((curso) => {
            
            const fila = document.createElement("tr");

            const tdNombre = document.createElement("td");

            tdNombre.textContent = curso.nombre;

            const tdProfesor = document.createElement("td");

            tdProfesor.textContent = curso.profesor;

            const tdPrecio = document.createElement("td");

            tdPrecio.textContent = curso.precio;

            const tdCiudad = document.createElement("td");

            tdCiudad.textContent = curso.ciudad;

            const tdCupo = document.createElement("td");

            tdCupo.textContent = curso.cupo;

            fila.appendChild(tdNombre);
            fila.appendChild(tdProfesor);
            fila.appendChild(tdPrecio);
            fila.appendChild(tdCiudad);
            fila.appendChild(tdCupo);
            tablaBody.appendChild(fila);

        });

    })