let dni=prompt('Ingrese su DNI');
if(dni.trim() === ""|| isNaN(dni)){
    alert('Ingresar su DNI solo con numeros');
}else if(dni.length!= 8 && dni.length!= 7){
    alert('El DNI tiene exactamente 7 u 8 caracteres');
}else if(dni === "00000000" || dni === "0000000"){
    alert('DNI no valido')
}else{
    console.log('Su DNI es '+ dni);
}









