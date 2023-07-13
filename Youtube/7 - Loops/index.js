/*

1 - For
2 - For in
3 - For of
4 - While

*/  

const pessoasArray = [
    {
        nome: 'Alessandra',
        idade: 40,
        sexo: 'F',
        motorista: false,
    },
    {
        nome: 'André',
        idade: 12,
        sexo: 'M',
        motorista: false,
    },
    {
        nome: 'João',
        idade: 35,
        sexo: "M",
        motorista: true,
    },
    {
        nome: 'Karla',
        idade: 5,
        sexo: 'F',
        motorista: false,
    },
    {
        nome: 'Vitor',
        idade: 18,
        sexo: "M",
        motorista: true,
    },    
    {
        nome: 'Vanessa',
        idade: 16,
        sexo: "F",
        motorista: false,
    },
];

// 1 - For

/*
for(var i = 0; i < pessoasArray.length; i++){
    pessoasArray[i].idade = 10;
}

console.log(pessoasArray)
*/



// 2 - For in => funciona tanto para array para objeto!

/*
var todosOsNomes = '';

for(var x in pessoasArray){
    todosOsNomes += ` - ${pessoasArray[x].nome}`
}

console.log(todosOsNomes)
*/


// 3 - For of

/*
for(p of pessoasArray){
    console.log(p)
}
*/

/*
var nomePessoa1 = pessoasArray[1].nome

for(c of nomePessoa1) {
    console.log(c)
}

*/



// 4 - While e Do While
/*
var i=0;

do{
    console.log(pessoasArray[i])
    i++;
} while(i< pessoasArray.length)
*/

var i=0;
while(i< pessoasArray.length){
    console.log(pessoasArray[i])
    i++
}