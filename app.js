let idContador = 1;
let objetos = [];

function agregarObjeto() {
    const objetoInput = document.getElementById('objetoInput');
    const tablaObjetos = document.getElementById('tablaObjetos');

    if (objetoInput.value.trim() !== '') {
        const nuevoObjeto = {
            id: idContador++,
            nombre: objetoInput.value.trim()
        };

        objetos.push(nuevoObjeto); // Agregar el nuevo objeto al array

        const newRow = tablaObjetos.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.textContent = nuevoObjeto.id;
        cell2.textContent = nuevoObjeto.nombre;

        objetoInput.value = '';
    }
}

