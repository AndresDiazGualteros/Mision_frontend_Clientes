const crearClientes = document.getElementById('CrearCliente');
const modal = document.getElementById('Modal');
const atras = document.getElementById('atras');
const tabla = document.getElementById('tabla');
const GuardarCambios = document.getElementById('GuardarCambios');
 



atras.addEventListener('click', Atras)
crearClientes.addEventListener('click', Modal)

function Modal() {
    modal.style.top = '0px';
}
function Atras() {
    modal.style.top = '-1200px';
}


GuardarCambios.addEventListener('click', ()=>{
    /* formulario constantes */
    const nombre = document.getElementById('Nombre').value;
    const nitCC = document.getElementById('Nit/CC').value;
    const contacto = document.getElementById('contacto').value;
    const apellidos = document.getElementById('apellidos').value;
    const Direccion = document.getElementById('Direccion').value;
    const telefono = document.getElementById('telefono').value;
    const CupoTotal = document.getElementById('cupo_total').value;
    const CupoDisponible = document.getElementById('Cupo_disponible').value;
    const diaGracia = document.getElementById('Dias_de_gracias').value;
    


    if(nombre!='' && apellidos!='' && Direccion!='' && nitCC!='' && contacto!='' && telefono!='' && CupoTotal!='' && CupoDisponible!='' && diaGracia!='' && GuardarCambios!=''){
        tabla.innerHTML+=`
        <tr>
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${nitCC}</td>
        <td>${Direccion}</td>
        <td>${ciudad}</td>
        <td>${telefono}</td>
        <td>${CupoDisponible}}</td>
        <td>Activo</td>
        <td>
            <span class="material-symbols-outlined">person_add</span>
            <span class="material-symbols-outlined">delete</span>
        </td>
    </tr>
        `
        modal.style.top = '-1200px';
    }else{
        alert('Campos vacios')
    }
})
