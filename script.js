
const tarea = document.getElementById('tarea');
const boton_guardar = document.getElementById('botton_guardar_tareas');
const listaTareas = document.getElementById('lista_de_tareas');

function agregar_tarea () {
    const tarea_en_la_lista = tarea.value.trim();

    if (tarea_en_la_lista !== "") {
        const nueva_tarea = document.createElement("li");

        const label = document.createElement("label");
        label.classList.add("checkbox-container");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("completar-check");

        const texto_tarea = document.createElement("span");
        texto_tarea.textContent = tarea_en_la_lista;
        texto_tarea.classList.add("texto-tarea");

        checkbox.addEventListener("change", () => {
            nueva_tarea.classList.toggle("completada");
        });

        const boton_eliminar = document.createElement("button");
        boton_eliminar.textContent = "X";
        boton_eliminar.classList.add("eliminar_btn");
        boton_eliminar.addEventListener("click", () => {
            listaTareas.removeChild(nueva_tarea);
        });

        label.appendChild(checkbox);
        label.appendChild(texto_tarea);
        
        nueva_tarea.appendChild(label);
        nueva_tarea.appendChild(boton_eliminar);
        listaTareas.appendChild(nueva_tarea);

        tarea.value = "";
        tarea.focus();
    }
}

boton_guardar.addEventListener("click", agregar_tarea);

function onEnter (presionar) {
    if (presionar.key === 'Enter') {
        agregar_tarea();
    }
}

tarea.addEventListener("keypress", onEnter);