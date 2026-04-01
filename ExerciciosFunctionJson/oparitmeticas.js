function soma(n1,n2){
    soma = n1 + n2
    let res = {
      'resultado' : soma
    }
    return res
}

function sub(n1,n2){
    sub = n1 - n2

    let res = {
        'resultado': sub
    }
    return res
}

function multi(n1,n2){
    multi = n1 * n2

    let res = { 
        'resultado' : multi
    }
    return res
}

function div(n1,n2){
    div = n1/n2

    let res = {
        'resultado' : div
    }
    return res
}

function raiz(n1){
    raiz = Math.sqrt(n1)

    let res = {
        'resultado' : raiz
    }
    return res
}

function pot(n1,n2){
    pot =  Math.pow(n1,n2)

    let res = {
        'resultado' : pot
    }
    return res
}

function resdiv(n1,n2){
    resdiv = n1%n2

    let res = {
        'resultado' : resdiv
    }
    return res
}

export {soma, sub, multi, div, raiz, pot, resdiv}