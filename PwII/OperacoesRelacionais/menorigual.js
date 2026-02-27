const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.r de maenor ou igual

console.log("No parque de diversões há um brinquedo que só é permitido a entrada caso tenha menos de 16 anos. Diga sua idade e imformaremos se você poderia entrar!");
console.log(" ")


rl.question('Digite sua idade: ', (numero) => {
  let idade  = Number(numero);

  if (idade <=16) {
    console.log("vocÊ ten", idade , "anos, então poderia entrar!");
  } else if (idade < 16) {
    console.log("não poderia ");
  
}});