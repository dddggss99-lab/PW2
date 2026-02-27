const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.l de or

console.log("Um cinema regional postou uma promoção em suas redes sociais, onde idosos e estudantes tem direito a uma promoção de 50% na entrada para qualquer filme aos domingos.  ");
console.log(" ")


rl.question('Digite sua idade!: ', (numero) => {
  let n_idade  = Number(numero);

  if (n_idade >= 60 || n_idade <= 18) {
      console.log("Parabéns! Você tem direito a 50% de desconto.");
    } else {
      console.log("Valor da entrada: Inteira.");
    }
    
});