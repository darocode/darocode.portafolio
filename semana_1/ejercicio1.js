//Exportaciones de modulos y funciones

const sumar=(n1, n2)=>{
//    const n1=20, n2=40;

let suma = n1+n2;

console.log(`La suma de los numeros ${n1} + ${n2} es: ${suma}`);
}

const restar=(n1, n2)=>{
    let resta = n1-n2;
    console.log(`La resta de los numeros ${n1} - ${n2} es: ${resta}`)
}

const multiplicar =(n1,n2)=>{
    let multiply = n1*n2;
    console.log(`La multiplicacion de los numeros ${n1} * ${n2} es: ${multiply}`)
}

const diividir =(n1,n2)=>{
    let dividicion = n1/n2;
    console.log(`La divicion de los numeros ${n1} / ${n2} es: ${dividicion}`)
}

/*exports.sumar=sumar
exports.restar=restar
exports.multiplicar=multiplicar
exports.diividir=diividir*/

const operaciones={}

operaciones.sumar=sumar;
operaciones.restar=restar;
operaciones.multiplicar=multiplicar;
operaciones.diividir=diividir;

module.exports=operaciones;

