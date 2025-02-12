/**
 *  @autor Nicoli Santos 
 */


function sortear(){
    let nipes =["♥","♦","♣","♠" ]
    let faces = ["A", "2", "3", "4","5","6","7","8","9","10","J","Q","K"]

    // gerar numeros aleatorios em JS (random)
    // Math.random() * 4 (gera 4 numeros: 0,1,2,3)
    // Math.floor() converte para números inteiros
    let nipesorteado = nipes [Math.floor(Math.random() * 4)]
    let facesortiadas = faces [Math.floor(Math.random() * 13)]
   // console.clear()
   // console.log(facesortiadas)
   // console.log(nipesorteado)

   // determinar a cor com base no nipe sorteado 
   let cor 
   if(nipesorteado === "♥" || nipesorteado === "♦" ) {
    cor ="#ff0000"
   } else {
    cor ="#000000"
   }
   
// renderização do canto superior 
    document.getElementById('supEsq').innerHTML=`<div>${facesortiadas}</div><div>${nipesorteado}</div>`

    // a linha abaixo aplica o estilo de cor ao documento html identificado como 'supEsq'
    document.getElementById('supEsq').style.color = cor 

// renderização do centro 
   // verificar o nipe sortiado e renderizar uma imagem ou o nipe e sua respectiva cor de acordo com a carta
  let cc = document.getElementById('centroCarta') 
  if (facesortiadas === "J") {
    cc.innerHTML = `<img src="img/valete.png">`
  } else if (facesortiadas === "Q") {
    cc.innerHTML = `<img src="img/dama.png">` 
  } else if (facesortiadas === "K") {
    cc.innerHTML = `<img src="img/rei.png">`
  } else {
    cc.innerHTML =`${nipesorteado}`
    cc.style.color = cor
  }
   

// renderização do canto inferior direito 
    document.getElementById('infDir').innerHTML=`<div>${facesortiadas}</div><div>${nipesorteado}</div>`
    document.getElementById('infDir').style.color = cor 

}
