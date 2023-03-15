nombre, correo, mensaje;
let formulario = document.getElementById(`form`)
formulario.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    leerDatos()
})
function leerDatos(){
    nombre = document. getElementById(`nombre`).value
correo = document.getElementById(`correo`).value
mensaje = document.getElementById(`textarea`).value
}
