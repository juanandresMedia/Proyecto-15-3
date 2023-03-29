let propietario, modelo, placa, tipov, fecha, hora, cantidad

let formulario = document.getElementById('form')
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {

    propietario = document.getElementById('propietario').value;
    modelo = document.getElementById('modelo').value;
    placa = document.getElementById('placa').value;
    tipov = document.getElementById('tipov').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;
    cantidad = document.getElementById('cantidad').value;
    ValidarData(propietario, modelo, placa, tipov, fecha, hora, cantidad)
    GuardarLocalStorage(propietario, modelo, placa, tipov, fecha, hora, cantidad)

}
function ValidarData(propietario, modelo, placa, tipov, fecha, hora, cantidad) {

    
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Complete todos los campos',
            footer: '<a href="">Why do I have this issue?</a>'
        })
  
  
    
    
}
function GuardarLocalStorage(propietario, modelo, placa, tipov, fecha, hora, cantidad) {
    localStorage.setItem('propietario', propietario)
    localStorage.setItem('modelo', modelo)
    localStorage.setItem('placa', placa)
    localStorage.setItem('tipov', tipov)
    localStorage.setItem('fecha', fecha)
    localStorage.setItem('hora', hora)
    localStorage.setItem('cantidad', cantidad)
    ListarData()
}

function ListarData() {
    let propietarioUsu = localStorage.getItem('propietario')
    let modeloUsu = localStorage.getItem('modelo')
    let placaUsu = localStorage.getItem('placa')
    let tipovUsu = localStorage.getItem('tipov')
    let fechaUsu = localStorage.getItem('fecha')
    let horaUsu = localStorage.getItem('hora')
    let cantidadUsu = localStorage.getItem('cantidad')
}

