const tabla = document.querySelector('table tbody')
const confirmaTurno = document.getElementById('agendar')
const agenda = JSON.parse(localStorage.getItem('turnosSeleccionados')) || []
const total = document.getElementById('total')


function tablaTurnos(turno){
    return `<tr>
                <td class='tabla'>${turno.fecha}</td>
                <td class='tabla'>${turno.horario}</td>
                <td class='tabla'>${turno.especialidad}</td>
                <td class='tabla'>${turno.especialista}</td>
                <td class='tabla'>$ ${turno.precio}</td>
                <td class='tabla'><button class='btn btn-danger' data-id="${turno.id}">Eliminar</button></td>
            </tr>`
}
//funcion que renderiza la tabla si hay turnos tomados

function cargaTablaTurnos() {
    tabla.innerHTML = '';
    if (agenda.length > 0) {
        agenda.forEach(turno => tabla.innerHTML += tablaTurnos(turno[0]))
        TotalTurnos()
    }
    // Agregar el evento click a los botones de eliminar
    document.querySelectorAll('.btn.btn-danger').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id') 
            //getAttribute devuelve el valor del elemento pasado, en este caso el id del boton
            eliminarTurno(id)
        })
    })
}  

function TotalTurnos () {
    let totalTurnos = 0
    //utiliza reduce()
    totalTurnos = agenda.reduce((acumulador, turno) => acumulador + turno[0].precio, 0)
    total.textContent = `$ ${totalTurnos}`
}

function eliminarTurno(id) {
    const index = agenda.findIndex(turno => turno.id === id)
    if (index) {
        agenda.splice(index, 1)
        localStorage.setItem('turnosSeleccionados', JSON.stringify(agenda))
        cargaTablaTurnos()
        TotalTurnos()
    }
}


//funcion que valida el email ingresado
function validarDatos(){
    const email = document.getElementById('email').value
    const nombre = document.getElementById('name').value
    const telefono = document.getElementById('phone').value
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //evalua las expresiones regulares de email que ingresa el usuario
    if(regex.test(email) && nombre != '' && telefono!= ''){
        return true
    } else {
        return Toastify({text: "Datos invalidos", duration: 2000}).showToast()
    }
}

confirmaTurno.addEventListener('click', () =>{
    const form = document.getElementById('form')
    if(agenda.length > 0 && validarDatos()==true){
        validarDatos()
        Swal.fire({
            title: "Su turno ha sido agendado",
            text: `La confirmacion de los turnos y datos se enviara a : ${email.value}. Verifique su casilla de correo.`,
            icon: "success"
          })
          form.reset() // vacia el form
    } else {
        Swal.fire({
            title: "No hay turnos agendados o los datos no son correctos",
            text: "Regrese a la pagina principal para seleccionar un turno, o complete los campos de manera correcta",
            icon: "error"
          });
    }
})


cargaTablaTurnos()
eliminarTurno()













