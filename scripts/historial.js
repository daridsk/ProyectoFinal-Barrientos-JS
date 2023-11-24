let pagos = localStorage.getItem('registro-de-pagos');

document.addEventListener('DOMContentLoaded', () => {
    pagos = JSON.parse(pagos) || [];
})

const buscador = document.querySelector('#buscar-historial');
const botonHistorial = document.querySelector('#boton-historial');

let tablaHistorial = document.querySelector('#cuepo-tabla-historial');
function mostrarTabla (pagos = []) {
    tablaHistorial.innerHTML = '';
    pagos.forEach((pago) => {
        const fechaLimpia = conseguirFecha(pago.fecha)
        const tr = document.createElement('tr');
        tr.classList.add('tabla-historial-tr');
        tr.innerHTML = `
        <th scope="col">${pago.nombre}</th>
        <th scope="col">${pago.apellido}</th>
        <th scope="col">${pago.email}</th>
        <th scope="col">${pago.telefono}</th>
        <th scope="col">${pago.metodos}</th>
        <th scope="col">$${pago.total}</th>
        <th scope="col">${fechaLimpia}</th>
        `;

        tablaHistorial.append(tr);
    });

    
};

mostrarTabla();


botonHistorial.addEventListener('click', cargarHistorial)
function cargarHistorial() { 

    const busqueda = buscador.value.trim().toLowerCase();
    const resultados = filtroBusqueda(busqueda, pagos);

    mostrarTabla(resultados);
} 

const filtroBusqueda = (busqueda = '', pagos = []) => {
    return pagos.filter((pago) => {return pago.nombre.toLowerCase().includes(busqueda.toLowerCase())});
}



/*  const busqueda = buscador.value.trim().toLowerCase();
    const filtroBusqueda = pagos.filter((pago) => pago.telefono.trim());
    
    filtroBusqueda.forEach(pago => {
        const li = document.createElement('li');
        li.classList.add('lista-historial');
        li.innerText = filtroBusqueda;

    filtroBusqueda.append(li);

    }); */

