// l.r de map
let precosReais = [100, 250, 400, 50];

// O map cria uma nova lista aplicando 10% de desconto
let precosComDesconto = precosReais.map(preco => {
    let desconto = preco * 0.1;
    return preco - desconto;
});

console.log("Preços Originais:", precosReais);
console.log("Preços com 10% de Desconto:", precosComDesconto);




