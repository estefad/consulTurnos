//SEGUNDA ENTREGA- DOMINGUEZ ESTEFANIA

//simulador de turnos
const Turnos = [
    {id: 1, nombre: "Dr. Maxi Locatelli", especialidad: "Psiquiatria", horario: "8:30", fecha: "2024-03-10"},
    {id: 2, nombre: "Lic. Florencia Mora", especialidad: "Psicologia", horario: "8:45", fecha: "2024-03-15"},
    {id: 3, nombre: "Lic. Julieta Stor", especialidad: "Nutricion", horario: "9:00", fecha: "2024-03-10"},
    {id: 4, nombre: "Lic. Veronica Giachino", especialidad: "Admision", horario: "9:15", fecha: "2024-03-15"},
    {id: 5, nombre: "Lic. Lucia Bell", especialidad: "Musicoterapia", horario: "9:30", fecha: "2024-03-10"}
];

const misTurnos = []; // Array vacío para cargar los turnos

function asignarTurno() {
    let paciente = prompt("Indique su nombre")
    let especialista = parseInt(prompt("Indique su especialidad: 1-Psiquiatria, 2-Psicologia, 3-Nutricion, 4-Admision, 5-Musicoterapia"))
    let idTurno = parseInt(prompt("Indique el ID de su especialista: 1-2-3-4-5"))


    let especialidades = ["Psiquiatria", "Psicologia", "Nutricion", "Admision", "Musicoterapia"] 
    //este arr, muestra la seleccion del usuario en string
    //las especialidades tienen que coincidir en el arr turnos y en la seleccion de usuario o tira que no encontro el turno
    let especialidad = especialidades[especialista - 1]
    //como la seleccion comienza en 1 para el usuario, le resto la seleccion menos el indice, osea: 
    //seleccion -1= especialista - id = posicion en el array


    let turnoFiltro = Turnos.filter((turno) => turno.especialidad === especialidad && turno.id === idTurno) //filtra por especialidad e id
    if (turnoFiltro.length > 0) {
        let turno = turnoFiltro[0] //si encuentra el turno, lo registra como primero en el arr y lo agrega al array vacio misTurnos
        misTurnos.push(turno) //si hay coincidencia de id y especialidad en el filter, se agregan elem turno(id, dia...) al array
        console.log(paciente, "Su turno asignado es el nº:", turno.id, "con", turno.nombre, "de especialidad:", turno.especialidad, "a las", turno.horario, "el día", turno.fecha)
    } else {
        console.log("No se encontró un turno con la especialidad seleccionada.")
    }
}

asignarTurno();

let respuesta = prompt("¿Desea otro turno? S/N")

while (respuesta.toLowerCase() === "s") {
    asignarTurno()
    respuesta = prompt("¿Desea otro turno? S/N")
}

if(misTurnos.length>0){
    console.table(misTurnos) 
}else{
    console.log("No tiene turnos asignados")
}
console.log("Gracias por su visita.")