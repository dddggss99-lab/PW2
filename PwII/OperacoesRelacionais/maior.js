const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.r de maior 
rl.question('Digite seu primeiro numero: ', (numero1) => {
  let a = Number(numero1);

rl.question('Digite seu segundo numero: ', (numero2) => {
  let b = Number(numero2);

  if (a < b) {
    console.log(b, "é maior que  ", a);
  } else if (b < a) {
    console.log(a, "é maior que  ", b);
  
}})
});