const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.r de igual

console.log("quantos rins um ser humano normalmente tem?");
console.log(" ")


rl.question('Digite sua resposta: ', (resposta) => {
  let quantidade  = Number(resposta);

  if (quantidade == 2) {
    console.log("correto, normalmente o ser humano possui 2 rins!");
  
}});