const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.l de not

rl.question('Quantos produtos há no estoque?', (numero) => {
  let quantidade  = Number(numero);

  if (!quantidade) {
    console.log("AVISO!: O estoque está vazio e precisa ser reabastecido");
  } else  
    console.log("Temos", quantidade , "unidades em estoque.");
    
});