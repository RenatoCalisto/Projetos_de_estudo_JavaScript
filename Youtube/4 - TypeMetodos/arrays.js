/* Array

1 - Pop/Push
2 - Shift/Unshift
3 - Splice/Slice
*/

var carrosArray = ['Fiat', 'VW', 'GM', 'Ferrari']

console.log('Original array: ', carrosArray)

// Pop e Push

carrosArray.pop()

console.log('Pop: ', carrosArray)

carrosArray.push('Renault')

console.log('Push: ', carrosArray)

// 2 - Shift/Unshift

carrosArray.shift()

console.log('Shift: ', carrosArray)

carrosArray.unshift('JAcMotors')

console.log('Unshift: ', carrosArray)

// 3 - Splice/Slice

carrosArray.splice(1, 2)

console.log('Splice 2 elemento: ', carrosArray)

carrosArray.slice(1)

console.log('Slice: ', carrosArray)