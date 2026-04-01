import res from "express/lib/response"

function ifcomp(n1){
    let res

    if(n1 < 0) {
       res = {'status' :"negativo"}
    } else if (n1== 0) {
       res = {'status' :"neutro"}
    } else {
       res = {'status' :"positivo"}
    }

    return res
}

function ifsimp(n1){
    let res

    if(n1>=16){
        res = {'status' : 'Você pode votar!'}
    }

    return res
}

function iftradi(n1){
    let res

    if(n1 % 2 == 0){
        res = {'status' : 'Par'}
    } else {
        res = {'status' : 'Ímpar'}
    }

    return res
}

function swit(n1){
    let res
    let mes = Number(n1)
    switch (mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            res = {'status' : 'O mês apresenta 31 dias'}
            return res
            break
        case 4:
        case 6:
        case 9:
        case 11:
            res = {'status' : 'O mês apresenta 30 dias'}
            return res
            break
        case 2:
            res = {'status' : 'O mês apresenta 28 dias'}
            return res
            break
        default:
            res = {'status' : 'O mês é inválido'}
            return res 
    }
}

function ternario(n1){
    return n1 % 2 == 0
       ? { 'resultado' : 'par'}
       : { 'resultado' : 'ímpar'}
}

export {ifcomp, ifsimp, iftradi, swit, ternario}