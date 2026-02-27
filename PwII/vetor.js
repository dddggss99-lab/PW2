// Inversão de vetor

let TAM = 10;

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = new Array(TAM);

// Copiando vetor A para B
for (let i = 0; i < TAM; i++) {
    b[i] = a[i];
}

// Mostrando vetor B invertido
for (let i = TAM - 1; i >= 0; i--) {
    console.log(b[i])
}

// Média de valores do vetor

let tam = 10;

let e = [5, 7, 8, 6, 9, 4, 10, 3, 2, 8];

let soma = 0;
let media;

// Somando os valores do vetor
for (let i = 0; i < tam; i++) {
    soma = soma + e[i];
}

// Calculando a média
media = soma / tam;

console.log("O resultado da média é: " + media);