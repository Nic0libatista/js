/**
 * POO
 * abstração, herança e polimosfismo
 * @autor Nicoli Santos
 */



// classe modelo (iniciar sempre com letra maiuscula)
class Bloco {
constructor(textura,resistencia) {
    this.textura = textura
    this.resistencia = resistencia

}

// açoes

    criarBloco(){
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`resistencia: ${this.resistencia}`)
    }

    construir(){
        console.log(`Bloco de ${this.textura} colocado.`)

    }
    minerar(){
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

// classe modelo enxada com herança de bloco
class Enxada extends Bloco {
    // atributos
    constructor(textura, resistencia, conquista){
        super(textura, resistencia) // super -> classe pai
        this.conquista = conquista

    }
    // Açoes
    criarEnxada(){
        console.log("-------------------------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Enxada de ${this.resistencia}`)
    }
    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true){
            console.log("☀ Conquista obtida!")
        }
    }
    //polimorfismo (obrigatorio manter o nome do método da classe modelo (pai))
    minerar(){
        console.log("✞ Dano atribuído!")
    }
}
    
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

    //instanciando (criando) um objeto
const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const Enxada1 = new Enxada("madeira",2, false)
Enxada1.criarEnxada()
Enxada1.arar()


const Enxada2 = new Enxada("ferro",10, true)
Enxada2.criarEnxada()
Enxada2.arar()


const Enxada3 = new Enxada("diamante",20, false)
Enxada3.criarEnxada()
Enxada3.minerar()