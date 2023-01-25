const crearClientes = document.getElementById('CrearCliente');
const modal = document.getElementById('Modal');
const atras = document.getElementById('atras');
/* formulario constantes */
const nombre = document.getElementById('Nombre');
const nitCC = document.getElementById('Nit/CC');
const contacto = document.getElementById('contacto');
const apellidos = document.getElementById('apellidos');
const Direccion = document.getElementById('Direccion');
const telefono = document.getElementById('telefono');
const CupoTotal = document.getElementById('cupo_total');
const CupoDisponible = document.getElementById('Cupo_disponible');
const diaGracia = document.getElementById('Dias_de_gracias');
 



atras.addEventListener('click', Atras)
crearClientes.addEventListener('click', Modal)

function Modal() {
    modal.style.top = '0px';
}
function Atras() {
    modal.style.top = '-1200px';
}


class Personas{
    constructor(nombre, nitCC, contacto,apellidos, Direccion, telefono, CupoTotal, CupoDisponible, diaGracia){
    this.nombre = nombre
    this.nitCC=nitCC
    this.contacto=contacto
    this.apellidos=apellidos
    this.Direccion=Direccion
    this.telefono=telefono
    this.CupoTotal=CupoTotal
    this.CupoDisponible=CupoDisponible
    this.diaGracia=diaGracia
    }
}

