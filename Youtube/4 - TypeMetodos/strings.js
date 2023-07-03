/*Métodos de Strings
1 - Length
2 - IndexOf
3 - Search
4 - Slice | Substring
5 - Replace
6 - Uppercase | Lowercase
7 - Trim
8 - ChatAt
*/

var text = 'Bem vindo ao SevenCoders'


// 1 - Length

console.log('Length (tamanho): ',text.length)

// 2 - IndexOf

console.log('Indice do: ', text.indexOf('vindo'))

// 3 - Search

console.log('Search', text.search('vindo'))

//4 - Slice | Substring

console.log("Slice : ", text.slice(0, 4))
console.log('Substring: ', text.substring(0 ,4))

//5 - Replace

console.log('Replace: ', text.replace('Bem vindo', 'Welcome'))

//6 - Uppercase | Lowercase

console.log('Uppercase: ', text.toUpperCase())
console.log('Lowercase: ', text.toLowerCase())

//7 - Trim

console.log('Trim: ', text.trim())

//8 - ChatAt

console.log('CharAt: ', text.charAt(4))