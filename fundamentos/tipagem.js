/**
 * tipagem dinâmica - JS
 */

// Declaração de variaveis 
let nome, idade, peso, altura, vip, imc 

// entrada de dados

nome = "Nicoli Santos"
idade = 17
peso = 54
altura = 1.69
vip = true

// A linha abaixo verifica o tipo da variável
// console.log(typeof(vip))

console.clear()
// Processamento
// imc (indice de massa corporal | fcm (frequência cardiaca maxíma))
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)

// saida
console.log("ficha do aluno")
console.log("____________________________________")
console.log(`Nome: ${nome}`) 
console.log(`idade: ${idade}`) 
console.log(`Peso: ${peso}`) 
console.log(`altura: ${altura}`) 
console.log(`vip: ${vip}`) 
console.log(`imc: ${imc.toFixed(2)}`) 
console.log(`fcm: ${fcm} bmp`) 