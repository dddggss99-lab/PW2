//Acumulando os valores com o auxilío do forEach

let valores = [5, 17, 10, 9, 8, 4, 11];

let total = 0;

valores.forEach(numero => {
    total = total + numero;
});

console.log("Total:", total);