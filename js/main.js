//SIMULADOR TURNOS

const card = document.getElementById('cards')
const misTurnos = document.getElementById('misTurnos')

const turnosTomados = []

function cargarTurnos(turno){
    return `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${turno.especialidad}</h5>
            <h5 class="card-title">${turno.especialista}</h5>
            <p class="card-text">${turno.horario} hs</p>
            <p class="card-text">${turno.precio}</p>
            <button id= ${turno.id} class="btn btn-primary">Agendar turno</button>
            </div>
        </div>`
}

function cargarCard(){
    if(turnos.length > 0){
        card.innerHTML = ' '
        turnos.forEach((turno)=>card.innerHTML += cargarTurnos(turno))
    } else{
        card.innerHTML = 'No hay turnos disponibles'
    }
}


function buscaTurnos(){
    const buscar = document.querySelector('button#agendar')
    
    buscar.addEventListener('click', (e) => {
        e.preventDefault()
        const especialidad = document.getElementById('especialidad')
        const dia = document.getElementById('dia')
        const res = turnos.filter((turno)=> turno.especialidad.toLowerCase()== especialidad.value
                                                && turno.dia.toLowerCase() == dia.value)
        localStorage.setItem("ultimoTurno", JSON.stringify(buscar))
        //res compara si la especialidad y dias ingresados coninciden con la busqueda
        //si existe, lo filtra y muestra
        if(res.length > 0){
            card.innerHTML = ' '
            res.forEach((turno)=>card.innerHTML += cargarTurnos(turno))
            //se vuelve a llamar a la card que contiene el turno
        }else{
            card.innerHTML = 'No hay turnos disponibles'
            const botonReintentar = document.createElement('button')
            botonReintentar.innerText = 'Reintentar'
            botonReintentar.addEventListener('click', () => {
                card.innerHTML = '' // Limpiar el mensaje de "No hay turnos disponibles"
                cargarCard()
            })
            card.appendChild(botonReintentar)
            
        }
    })
    //si res es>0 se vuelven a generar las cards filtradas
}

function agregarTurno(){
    const agregar = document.querySelectorAll('button.btn')
    agregar.forEach(agrego => {
        agrego.addEventListener('click', (e) =>{
            e.preventDefault()
            const turnoAgregado= turnos.filter((turno) => turno.id == agrego.id)
            console.log(turnoAgregado)
            turnosTomados.length > 2 ? Swal.fire("Solo puede tomar 3 turnos") : turnosTomados.push(turnoAgregado) 
            localStorage.setItem('turnosSeleccionados', JSON.stringify(turnosTomados))
            //como solo puede tomar 3 turnos, el push se corta con el alert
            
        })
    });
}

cargarCard()
buscaTurnos()
agregarTurno()






