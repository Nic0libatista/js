/**
 * app - flex 
 * @autor Nicoli Santos 
 * 
 */

// Declaração de variáveis
let Etanol,Gasolina

function calcular(){
// Entrada de dados (input)
    Etanol = Frmflex.inputetanol.value
    Gasolina = Frmflex.inputgasolina.value
    //console.log(Etanol)
    //console.log(Gasolina)
    if (Etanol <0.7 * Gasolina){
        document.getElementById('Status').src="img/etanol.png"
    }
    else {
        document.getElementById('Status').src="img/gasolina.png"
    }
    return false
}