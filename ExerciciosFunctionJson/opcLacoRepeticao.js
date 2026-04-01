function fibonacci(n) {
    if (n <= 0) return "Número inválido";

    let termo1 = 1;
    let termo2 = 1;
    let resultado = "";
    let i = 1;

    do {
        resultado += termo1 + " ";
        let proximo = termo1 + termo2;
        termo1 = termo2;
        termo2 = proximo;
        i++;
    } while (i <= n);

    return resultado; 
}

function imparesAte1000() {
    let resultado = [];
    for (let i = 1; i <= 1000; i += 2) {
        resultado.push(i);
    }
    return resultado;
}


function verificarMaioridade(usuarios) {
    return usuarios.map(usuario => {
        if (usuario.idade >= 18) {
            return usuario.nome + " é maior de idade";
        } else {
            return usuario.nome + " é menor de idade";
        }
    });
}

function aplicarDesconto(precos) {
    return precos.map(preco => {
        let desconto = preco * 0.1;
        return preco - desconto + "% de desconto";
    });
}

function anosBissextos(inicio, fim) {
    let resultado = [];
    for (let ano = inicio; ano <= fim; ano++) {
        if (ano % 4 === 0) {
            resultado.push(ano);
        }
    }
    return resultado;
}

export {fibonacci, imparesAte1000, verificarMaioridade, aplicarDesconto, anosBissextos}


