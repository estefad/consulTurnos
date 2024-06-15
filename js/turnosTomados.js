const tabla = document.querySelector('table tbody')
const confirmaTurno = document.getElementById('agendar')
const agenda = JSON.parse(localStorage.getItem('turnosSeleccionados')) || []


function tablaTurnos(turno){
    return `<tr>
                <td class='tabla'>${turno.fecha}</td>
                <td class='tabla'>${turno.horario}</td>
                <td class='tabla'>${turno.especialidad}</td>
                <td class='tabla'>${turno.especialista}</td>
                <td class='tabla'>$ ${turno.precio}</td>
            </tr>`
}
//funcion que renderiza la tabla si hay turnos tomados

function cargaTablaTurnos() {
    tabla.innerHTML = '';
    if (agenda.length > 0) {
        agenda.forEach(turno => tabla.innerHTML += tablaTurnos(turno[0]))
        TotalTurnos()
    }
}  

function TotalTurnos () {
    let total = 0
    agenda.forEach(turno => total += turno[0].precio)
    document.getElementById('total').innerHTML = `Total: $ ${total}`
    //tomo cada turno, en su poscicion y sumo el precio
}

confirmaTurno.addEventListener('click', () =>{})

//funcion que valida el email ingresado
function validarEmail(){
    const email = document.getElementById('email').value

}

cargaTablaTurnos()