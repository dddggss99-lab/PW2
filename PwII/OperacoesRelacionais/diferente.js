const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.r de diferente

rl.question('Digite um numero: ', (resposta1) => {
  let numero1  = Number(resposta1);

  rl.question('Digite um outro numero ', (resposta2) => {
  let numero2  = Number(resposta2);

  if (numero1 !== numero2) {
    console.log("o numero ", numero1, "é diferente do numero", numero2, "!");
  
}})
});