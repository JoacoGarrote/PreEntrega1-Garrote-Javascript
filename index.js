// Variables

let verdad = true

// Funciones


function doctores(turnos) {
    switch (turnos) {
        case 1:
            turnos = "Ramírez"
            especialidad = "Cardiología"
            horario = "15.30"
            alert("Usted solicito turno con el Dr/a. " + turnos + " en el área de " + especialidad + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 2:
            turnos = "Sanchez"
            especialidad = "Pediatría"
            horario = "12.45"
            alert("Usted solicito turno con el Dr/a. " + turnos + " en el área de " + especialidad + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 3:
            turnos = "Torres"
            especialidad = "Neurología"
            horario = "09.15"
            alert("Usted solicito turno con el Dr/a. " + turnos + " en el área de " + especialidad + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 4:
            turnos = "Villalba"
            especialidad = "Ortopedia"
            horario = "19.00"
            alert("Usted solicito turno con el Dr/a. " + turnos + " en el área de " + especialidad + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 5:
            turnos = "Santore"
            especialidad = "Reumatología"
            horario = "11.30"
            alert("Usted solicito turno con el Dr/a. " + turnos + " en el área de " + especialidad + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 6:
            turnos = "Gabilano"
            especialidad = "Endocrinología"
            horario = "17.00"
            alert("Usted solicito turno con el Dr/a. " + turnos + " en el área de " + especialidad + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
    }
}


// Ingreso del nombre y apellido

let inicioNombre = prompt("Ingresá tu nombre:")
let inicioApellido = prompt("Ingresá tu apellido:")


alert("¡Docturno te da la bienvenida! \n Por favor clickeá en aceptar para continuar")


// MENU --> dentro contiene el inicio, turnos y confirmacion

while (verdad) {
    if ((inicioNombre != "") && (inicioApellido != "")) {
        verdad = false
        let inicioMenu = Number(prompt(`Hola ${inicioNombre} ${inicioApellido}, estas en el inicio, por favor elegí una de las siguientes opciones:` + "\n" + "1. Solicitar un turno" + "\n" + "2. Salir del sitio"))
        if (inicioMenu === 1) {
            let turnos = Number(prompt("Usted cuenta con la disponibilidad de los siguientes turnos, por favor solicite el que requiera:" + "\n" + "1. Dr. Ramírez, Juan - Cardiología - 15.30hs" + "\n" + "2. Dra. Sanchez, Carol - Pediatría - 12.45hs" + "\n" + "3. Dra. Torres, Analía - Neurología - 09.15hs" + "\n" + "4. Dr. Villalba, Miguel - Ortopedia - 19.00hs" + "\n" + "5. Dr. Santore, Favio - Reumatología - 11.30hs" + "\n" + "6. Dra. Gabilano, María Ines - Endocrinología - 17.00hs"));
            doctores(turnos)
            if ((turnos >= 1) && (turnos <= 6)) {
                let confirmacionTurnos = Number(prompt("Por favor, indique si confirma su turno o desea cancelarlo:\n 1. CONFIRMAR TURNO \n 2. CANCELAR TURNO"))
                if (confirmacionTurnos === 1) {
                    alert("Usted CONFIRMÓ su turno.\n ¡Muchas gracias por contar con Docturno!")
                } else if (confirmacionTurnos === 2) {
                    alert("Usted CANCELÓ su turno.\n Puede volver al menu para conseguir uno nuevo.")
                } else {
                    alert("Usted no colocó ni 1 ni 2, o se confundió de caracter, por favor vuelva a intentarlo.")
                }
            } else {
                alert("Pusiste un número que no abarca el 1 al 6, por favor intente de nuevo.")
                break
            }
        }
    } else {
        alert("Hubo un error al ingresar tu nombre, por favor corroborá que fue bien ingresado.")
        break
    }
}

