//PRIMERA ENTREGA- DOMINGUEZ ESTEFANIA
let nombreCompleto =  prompt("Ingrese su nombre completo")
let email= prompt("Ingrese su correo electronico")
let diaSeleccionado = ""; // Variable para almacenar el día seleccionado 

// Mostrar las opciones de días de la semana y permitir al usuario seleccionar en la siguiente funcion
function mostrarDias() {
    for (let i = 0; i < 5; i++) { 
        let diaSemana = ""; 
        switch (i) {
            case 0:
                diaSemana = "lunes";
                break;
            case 1:
                diaSemana = "martes";
                break;
            case 2:
                diaSemana = "miércoles";
                break;
            case 3:
                diaSemana = "jueves";
                break;
            case 4:
                diaSemana = "viernes";
                break;  
        }
        console.log((i+1) + ". " + diaSemana)//con i+1 me aseguro que no haya opcion 0
    }
}
// Solicitar al usuario que seleccione un día de la semana
function diaTurno() {
    let opcion = parseInt(prompt("Seleccione un día de la semana (1-5):"));

    if (opcion >= 1 && opcion <= 5) { 
        switch (opcion) {
            case 1:
                diaSeleccionado = "lunes";
                break;
            case 2:
                diaSeleccionado = "martes";
                break;
            case 3:
                diaSeleccionado = "miércoles";
                break;
            case 4:
                diaSeleccionado = "jueves";
                break;
            case 5:
                diaSeleccionado = "viernes";
                break;
        }
        // Generar varios turnos aleatorios para el día seleccionado
        for (let i = 0; i < 3; i++) {
            const horaTurno = Math.floor(Math.random() * 16)
            //como devuelve un num entre 0 y 1 lo multiplico para simular horarios, y con .floor redondeo el num
            console.log(nombreCompleto, "Tiene disponible el turno nº ", (i+1), "para el ", diaSeleccionado, " a las ", horaTurno, "hs.");
        }
    
        // Solicitar al usuario que seleccione un turno
        let turnoSeleccionado = parseInt(prompt("Seleccione un turno (1-3):"));
    
        if (turnoSeleccionado >= 1 && turnoSeleccionado <= 3) {
            console.log("Ha seleccionado el turno ", turnoSeleccionado, " para el ", diaSeleccionado, ".")
        } else {
            console.log("La opción seleccionada no es válida.")}
    
    }else{
        console.log("Elija una opcion valida para continuar")
    }
}
function confirmarTurno(){
    let respuesta=prompt("Confirma su turno: si/no")
    if(respuesta == 'si'){
       console.log(nombreCompleto, "Usted recibira la confirmacion de su turno al mail:", email, "Gracias por elegirnos!")
    }else{
        console.log("Complete nuevamente los datos o tome un nuevo turno.")
    }
}

mostrarDias()
diaTurno()
confirmarTurno()













































//aca hago comments cortos y concisos
/*aca hago comments en varias lineas cortos y concisos*/

/* let nombre = prompt("Ingrese nombre y apellido:")
 let edad = prompt("¿Cuál es su edad?");
 edad=Number(edad);

  if(nombre.trim() == "" || edad ==  0){
      console.warn("No se permiten campos vacíos");
      alert("Porfavor complete los datos")
  }else {
      console.log("Hola", nombre," tu edad es:", edad)
      //la coma concatena tambien al igual que +
 } */



//console.log(`El turno disponible para hoy es el ${turnos[Math.floor((Math.random() * turnos.length))]} del ${diaSemana}`);
//console.log(`El turno disponible para hoy es el ${turnos[Math.floor((Math.random() * turnos.length))]}`)
/*turnos.unshift('nicaragua')//agrego al principio
turnos.shift(1);//quito el primer elemento
turnos.pop();//elimino ultimo elemento
turnos.slice(1,3);//devuelve desde*/



/*const iva= 1.21

function Producto(id, nombre, importe, stock){
    this.id = id
    this.nombre = nombre
    this.importe = Number(importe)
    this.profesion = stock

    this.venta= function(){
        return `Se va a vender a total: ${this.importe *  iva}` 
    }
}

//METODOS EN Fx CONSTRUCTORAS
const producto1= new Producto(1,'Monitor',899.99, 10)
const producto2=new Producto(2,'Mouse',79.99, 5)

console.log(producto1.venta())

//CLASES JS
const impuesto= 1.21

class Productos{
    constructor(id, nombre, importe, stock){
        this.id = id
        this.nombre = nombre
        this.importe = Number(importe)
        this.profesion = stock
    }
    
    ventas(){
        return `El total de su producto es: ${this.importe *  impuesto}` 
    }
}

const producto3= new Productos(3,"Teclado",649.99 ,15 )
console.log(producto3.ventas()) */