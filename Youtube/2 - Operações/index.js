//operaçoes matemáticas

var resultado;
var x = 2;
var y = 5;

//soma
soma = (x + y);
console.log('Soma: ', soma);
console.log('Soma: ', x+=y); //=7

//subtração
subtracao = (x - y);
console.log('Subtração: ', subtracao); //=7-5
console.log('Subtração: ', x-=y); //=7-5

//multiplicação
multiplicacao = (x * y);
console.log('Multiplicação: ', multiplicacao);

//divisão
divisao = (x / y);
console.log('Divisão: ', divisao);

//calculo do módulo (resto da divisão)
modulo = (x % y);
console.log('Resto da divisão de ', x, ' e ', y, ' é ', modulo);

//calculo IMC
var peso = 80;
var altura = 1.7;

var imc = (peso / (altura * altura));
console.log('Seu IMC é: ', imc);

var primeiroNome = 'Renato';
var segundoNome = 'Calisto';
console.log('Nome completo : ', primeiroNome + ' ' + segundoNome);