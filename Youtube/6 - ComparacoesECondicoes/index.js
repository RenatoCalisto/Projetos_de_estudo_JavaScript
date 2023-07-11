/*
1 - If, Else e ElseIf
2 - Switch

Operadores de comparacao
    == ou ===
    != ou !==
    > e <
    >= e <=
    ?

Operadores Logicos
    && || !

*/


const pessoasArray = [
    {
        nome: 'Alessandra',
        idade: 40,
        sexo: 'F',
    },
    {
        nome: 'André',
        idade: 12,
        sexo: 'M',
    },
    {
        nome: 'João',
        idade: 35,
        sexo: "M",
    },
    {
        nome: 'Karla',
        idade: 5,
        sexo: 'F',
    },
    {
        nome: 'Vitor',
        idade: 18,
        sexo: "M",
    },    
    {
        nome: 'Vanessa',
        idade: 16,
        sexo: "F",
    },
];

console.log('Array original: ', pessoasArray)

// 1 - If, Else e ElseIf

/*
pessoasArray.forEach(p => {
    if(p.nome === 'André'){
        console.log('André Aachado!')
    } else if(p.nome.includes('A')){
        console.log(`A pessoa ${p.nome} não é o André, mas começa com A`)
    } else {
        console.log(`A pessoa ${p.nome} não é o André`)
    }
})

*/



/*
pessoasArray.forEach(p => {
    if(p.idade >= 18) {
        console.log(`A pessoa ${p.nome} é maior de idade! Pois possui ${p.idade} anos!`)
    } else{
        console.log(`A pessoa ${p.nome} é menor de idade! Pois possui ${p.idade} anos!`)
    }
})
*/


// 2 - Switch


/*
pessoasArray.forEach(p => {
    switch(p.nome.charAt(0)) {
        case 'V':
            console.log(`Inicia V: ${p.nome}`)
    break;
        case 'A':
           console.log(`Inicia A: ${p.nome}`)
    break;
        case 'J':
            console.log(`Inicia J: ${p.nome}`)
    break;

        default:
            console.log(`Inicial não encontrada ${p.nome}`)
        }
});

*/