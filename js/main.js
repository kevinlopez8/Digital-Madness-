function form(nombre, apellido, email, telefono, empresa, sitioWeb){
    this.nombre = nombre,
    this.apellido = apellido, 
    this.email = email,
    this.telefono = telefono,
    this.empresa = empresa,
    this.sitioWeb = sitioWeb 
}
function persona(){
    let nombre = prompt("Ingresar nombre")
    let apellido = prompt("Ingresar apellido")
    let email = prompt("Ingresar email")
    let telefono = Number(prompt("Ingresar telefono"))
    let empresa = prompt("Ingresar empresa (En caso de no tener dar a siguiente)")
    let sitioWeb = prompt("Ingresar sitio web (En caso de no tener dar a siguiente)")
}
const servicios = () =>{

}

alert("Bienvenido a Digital Madness, empresa de marketing digital, si desea que informacion escifica de alguno de nuestros productos, no dudes en escribirnos")

let respuesta = prompt("Desea que le enviemos un mail con informacion ?")

if(respuesta == "si"){  
    persona()
    console.log(form())
    

}else if(respuesta == "no"){
    alert("Cualquier duda no dude comunicarse con nosotros, Muchas gracias")
}else{
    alert("La opcion elegida no es valida")
}
