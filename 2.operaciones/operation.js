function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if (x2 == 0){
        console.log('no se puede divir entre cero');
    }else{
        return x1/x2;
    }
}

// ASI EXPORTA DIRECTAMENTE LAS FUNCIONES PARA LUEGO SER ESTANCIASDAS EN VARIABLES OBJETO DONDE SE HAGA EL LLAMADO DE LA IMPORTACION
// DE ESTA FORMA SOLO DEJA EXPORTAR UN SOLO PARAMETRO O FUNCION A LA VEZ
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;


// ASI SE PUEDE EXPORTAR UN OBJETO INSERTANDOLE LAS FUNCIONES DIECTAMENTE
const operation = {};
operation.add = add;
operation.substract = substract;
operation.multiply = multiply;
operation.divide = divide;
module.exports = operation;


// ASI SE PUEDE EXPORTAR UNA FUNCION
// function hello(name){
//     console.log('hola', name);
// }
// module.exports = hello;