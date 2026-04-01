function acumulacao(array) {
    let total = 0;
    array.forEach(numero => {
        total += numero;
    });
    return total;
}

function adicao(array, novaFruta) {
    array.push(novaFruta);
    return array;
}

function buscarVetor(array, valor) {
    if (array.includes(valor)) {
        return "Número encontrado!";
    } else {
        return "Número não encontrado.";
    }
}



export {acumulacao, adicao, buscarVetor};


