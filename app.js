document.addEventListener('DOMContentLoaded', () => {
    // Declaración de la variable de tipo array para almacenar los nombres
    let nombres = []; // Esta variable almacenará los nombres de los amigos

    const nombreInput = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    // Función para agregar un amigo a la lista
    function agregarAmigo() {
        // Capturar el valor del campo de entrada
        const nombre = nombreInput.value.trim();

        // Validar la entrada
        if (nombre === '') {
            alert('Por favor, inserte un nombre.'); // Mensaje de error si el campo está vacío
            return; // Detener la ejecución de la función
        }

        // Actualizar el array de amigos
        nombres.push(nombre); // Añadir el nombre al array

        // Limpiar el campo de entrada
        nombreInput.value = ''; // Restablecer el campo de texto a una cadena vacía

        // Actualizar la lista en la página
        actualizarLista();
    }

    // Función para sortear un amigo secreto
    function sortearAmigo() {
        // Validar que haya amigos disponibles
        if (nombres.length === 0) {
            alert('No hay nombres en la lista para sortear.'); // Mensaje de error si el array está vacío
            return; // Detener la ejecución de la función
        }

        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);

        // Obtener el nombre sorteado
        const amigoSecreto = nombres[indiceAleatorio];

        // Mostrar el resultado
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    }

    // Función para actualizar la lista de nombres en la página
    function actualizarLista() {
        // Limpiar la lista existente
        listaAmigos.innerHTML = ''; // Asegurarse de que no haya duplicados

        // Iterar sobre el arreglo nombres
        nombres.forEach(nombre => {
            // Crear un nuevo elemento de lista (<li>)
            const li = document.createElement('li');
            li.textContent = nombre; // Asignar el nombre al contenido del <li>
            li.setAttribute('role', 'listitem'); // Añadir atributo ARIA
            listaAmigos.appendChild(li); // Agregar el elemento a la lista
        });
    }

    // Asignar las funciones a los botones
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});
