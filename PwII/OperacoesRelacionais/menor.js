const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//o.r de menor
rl.question('Digite seu primeiro numero: ', (numeroa) => {
  let a = Number(numeroa);

rl.question('Digite seu segundo numero: ', (numerob) => {
  let b = Number(numerob);

  if (a > b) {
    console.log(b, "é menor que ", a);
  } else if (b > a) {
    console.log(a, "é menor que ", b);
  
}})
});