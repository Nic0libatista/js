/**
 * Estudo do método setinterval(timer)
 * 
 * @autor Nicoli Santos
 */

function piscar() {
    let ligada= false
    // a estrutura abaixo cria um intervalo a cada 1000ms = 1s
    setInterval (()=> {

    if (ligada === false) {
        document.getElementById('lamp').src="img/on.jpg" }
        else {
        document.getElementById('lamp').src="img/off.jpg" }
            ligada =!ligada // função not inverte (true - false. false - true)
    },500) // Ajuste do intervalo (1000ms = 1s)
    }
