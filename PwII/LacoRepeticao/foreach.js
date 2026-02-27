// l.r de foreach
let usuarios = [
    {nome: "João", idade: 25},
    {nome: "Maria", idade: 12},
    {nome: "Jonas", idade: 19}
];


usuarios.forEach((usuario) => {
   if (usuario.idade >= 18) {
    console.log(usuario.nome, "é maior de idade");
   } else {
    console.log(usuario.nome, "é menor de idade");
   }
});