const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.r de maior ou igual

console.log("No Brasil, menores de 18 anos não podem dirigir veículos automotores. Diga sua idade e falaremos se você está dentro da lei!");
console.log(" ")


rl.question('Digite sua idade: ', (numero) => {
  let idade  = Number(numero);

  if (idade >=18) {
    console.log("vocÊ ten", idade , "então é de maior e pode dirigir");
  } else if (idade < 18) {
    console.log("não está ");
  
}});