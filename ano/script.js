/**
 * ano automatico
 * @autor Nicoli Santos
 */

//inserindo o nome na tag <span>
let ano = document.getElementById('copyrightyear')
// a linha abaixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// a linha abaixo atribui o ano a tag <span> 
ano.innerHTML = anoAtual 