function maior (n1){
  let res

  if (n1 > 18) {
    res = {status :'Maior de idade'};
  }

  return res
}

function diferente (n1){
    let res

    if (n1 != 5) {
        res = {status :'o numero é diferente de 5'};
    }

    return res
}

function igual (n1){
    let res

    if (n1 == 1234) {
        res = {status : 'Senha correta!'};
    }

    return res
}

function menor (n1){
    let res

    if (n1 < 20){
        res = {status : 'Está frio!'};
    }

    return res
}

function menorIgual (n1){
    let res

    if (n1 <= 100) {
        res = {status : 'Dentro do limite'};
    }

    return res
}

function maiorIgual (n1){
    let res

    if (n1 >= 7){
        res = {status : 'Aprovado'};
    }

    return res
}

export {maior, menor, igual, maiorIgual, diferente, menorIgual}