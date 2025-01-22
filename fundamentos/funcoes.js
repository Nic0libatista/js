/**
 *  Estudo das funções 
*/

// Função somples (literal)
function hello() {
    console.log("hello function")
}
console.log(typeof(hello))
hello()

//função atribuida 
const hello2 = function (){
    console.log("hello function assigned")
}
console.log(typeof(hello2))
hello2()

// Arrow function => (simplificação de função atribuida)
// Function ----- =>
const hello3 = () => {
    console.log("hello arrow function")
}
console.log(typeof(hello3))
hello3()
// Funçoes com passagem de parâmetros e retorno
// Função literal
function somarS (num1,num2) {
    return (console.log(num1 + num2))
}

somarS(32,7)
// Função atribuida 
const somarA = function(num1,num2){
    return (console.log(num1 + num2))

}

somarA(4,6)

// Arrow function
const somarAF = (num1,num2) => {
    return (console.log(num1 + num2))

}
somarAF(9,4)

// Arrow function simplificada (retorno é implicito)
const somarAFS = (num1,num2) => console.log(num1 + num2)

somarAFS(9,1)