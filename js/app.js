
const year = document.querySelector('#year');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');
const marca = document.querySelector('#marca');
const puertas = document.querySelector('#puertas');



//resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;


//objeto para la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    puertas: '',
    transmision: '',
    color: '',
    minimo: '',
    maximo: '',

}

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);

     //por año
     llenarAños();
})


//event listener para selects de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAutos();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAutos();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAutos();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
})
//funciones

function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach (auto => {
        const {marca, modelo, year, puertas, transmision, color, precio} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca}
        ${modelo}
        ${year}
        ${puertas}
        ${transmision}
        ${color}
        ${precio}
        `;

        //instertar en el html
        resultado.appendChild(autoHTML)
    })
}
//limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}
//llenar select 

function llenarAños(){
    
    for (let i = max; i > min; i--){
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion);
    };
}

//filtrar autos

function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision).filter(filtrarMaximo).filter(filtrarMinimo);
    mostrarAutos(resultado);

    if (resultado.length) {
        mostrarAutos(resultado)
    } else {
        noResultado();
    }
}

function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta nuevamente'
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if ( year ) {
        return auto.year === year;
    }
    return auto;
    
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}
function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}