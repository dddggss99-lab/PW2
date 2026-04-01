function and(n1){
    let res

    if(n1>6 && n1<18){
        res = {'status' : 'Você está aprovado!'};
    } else {
        res = {'status' : 'Você está reprovado!'};
    }
    
    return res
}

function not(n1){
    let res
    
    if(!n1){
        res = {'status' : 'Você precisa fazer o login'};
    }

    return res
}

function or(n1){
    let res

     if(n1 >= 60 || n1 <= 12){
        res = {'status' : 'Ganhou bônus'};
     }

     return res
}

export {and, not, or}