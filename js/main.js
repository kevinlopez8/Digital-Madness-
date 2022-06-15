function Persona(nombre, apellido, email, telefono, empresa, sitioWeb){
    this.nombre = nombre
    this.apellido = apellido 
    this.email = email
    this.telefono = telefono
    this.empresa = empresa
    this.sitioWeb = sitioWeb 
}
function cliente(){
    let nombre = prompt("Ingresar nombre")
    let apellido = prompt("Ingresar apellido")
    let email = prompt("Ingresar email")
    let telefono = Number(prompt("Ingresar telefono"))
    let empresa = prompt("Ingresar empresa (En caso de no tener dar a siguiente)")
    let sitioWeb = prompt("Ingresar sitio web (En caso de no tener dar a siguiente)")

    const persona = new Persona(nombre, apellido, email, telefono, empresa, sitioWeb)
    console.log(persona)
}


alert("Bienvenido a Digital Madness, empresa de marketing digital, si desea que informacion escifica de alguno de nuestros productos, no dudes en escribirnos")
alert("")

let respuesta = prompt("Desea que le enviemos un mail con informacion ?")
if(respuesta == "si"){  
    cliente()
    let consulta = prompt("Puede dejar un mensaje acerca de que esta especificamente interesado, si no le mandaremos informacion de todo en general")

}else if(respuesta == "no"){
    alert("Cualquier duda no dude comunicarse con nosotros, Muchas gracias")
}else{
    alert("La opcion elegida no es valida")
}