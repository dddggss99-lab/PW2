const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.l de and

console.log("Na mídia, há boatos de que Leonardo DiCaprio, diz que por ser jovem, apenas se interessa por mulheres entre 18 e 26 anos. Você se encaixaria nos padrôes de Leonardo?");
console.log(" ")


rl.question('Digite sua idade!: ', (numero) => {
  let idade  = Number(numero);

  if (idade > 18 && idade < 26) {
    console.log("vocÊ ten", idade ,"? então talvrz tenha uma chance!");
  } else if (idade < 18) {
    console.log("isso seria errado...");
 } else if (idade > 26) {
    console.log("Ele não olharia pra você");
    
}});