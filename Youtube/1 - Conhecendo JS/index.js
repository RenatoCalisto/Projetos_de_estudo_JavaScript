var nome, sobrenome; //tipo String
var idade; //tipo Number
var maiorDeIdade; //tipo Boolean 
var fichaCriminal; //tipo Object {}
var listaDeNomesSuspeitos; //tipo Array []
const nomeImutavel = 'saci'; //tipo não muda

nome = 'Renato';
sobrenome = "Calisto";
idade = 30;
maiorDeIdade = true;
peso = 80.9;

fichaCriminal = {
    nome,
    sobrenome,
    idade,
    maiorDeIdade,
    peso,
    corDoCabelo: 'Preto'
}

listaDeNomesSuspeitos = [
    'João', 'Marcos', 'Pedro', 'Luiz'
]

console.log('Nome do Usuário: ', nome);
console.log('Sobrenome do Usuário: ', sobrenome);
console.log('Idade do Usuário: ', idade);
console.log('O usuário é maior de idade? : ', maiorDeIdade);
console.log('Qual o peso em kg do usuário? : ', peso);
console.log('*******************************************');
console.log('FICHA CRIMINAL:');
console.log(fichaCriminal)
console.log('*******************************************');
console.log('LISTA DE SUSPEITOS:');
console.log(listaDeNomesSuspeitos);
console.log(nomeImutavel);
