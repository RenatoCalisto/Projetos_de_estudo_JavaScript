/*
 1 - Sort e Reverse
 2 - ForEach
 3 - Map
 4 - Filter
 5 - Reduce
 6 - Find
*/

const timesArray = ['Barcelona', 'Real Madrid', 'Bayern', 'Borusia', 'Chelsea', 'Manchester'];
console.log('Array original: ', timesArray)

const numbersArray = [ 1, 345, 12, 2312, 123, 34, 85, 912];
console.log('Numbers Array original', numbersArray)

// 1 - Sort
console.log('Sort: ', timesArray.sort()) //só funciona com strings
console.log('Reverse: ', timesArray.reverse())

console.log('Sort Number: ', numbersArray.sort((a, b) => a - b))        //final a-b=sort
console.log('Reverse Number: ', numbersArray.sort((a, b) => b - a))     //final b-a=reverse

// 2 - ForEach => 1 ação

timesArray.forEach((time, index) => {
console.log('O time é : ', time)
console.log(`A posição do time ${time} é ${index}`)
})

// 3 - Map

const numbersFormatado = numbersArray.map((n) => n / 10)
console.log('Map: ', numbersFormatado)

// 4 - Filter

const filtrados = timesArray.filter((time) => time.charAt(0) === 'B')
console.log('Times filtrados: ', filtrados)

// 5 - Reduce

const somaDoArray = numbersArray.reduce((ac, n) => ac += n)
console.log('Soma do Array Reduce: ', somaDoArray)

// 6 - Find

//metodo 1
//const itemAchado = timesArray.find((t) => t === 'Barcelona')
//console.log('Find: ', itemAchado)

//metodo 2
//const itemAchado = timesArray.find((t) => t.charAt(0) === 'B')
//console.log('Find: ', itemAchado)