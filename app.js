/*primer declaro las dos variables que tiene mi mazo de cartas*/
const PALOS = ["♠", " ♥", "♦", "♣ "];

const VALORES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

/*creo la funcion para crear el mazo, utilicé flatmap ya que map solo me creaba 4 arrays diferentes, uno por cada palo*/
function crearMazoDeCartas() {
    return PALOS.flatMap (palo =>  {
        return VALORES.map (valor => {
            return new Carta(palo, valor);
        })
    })
}
/*creo la clase carta*/
class Carta {
    constructor(palo, valor){
        this.palo = palo;
        this.valor = valor;
    }
}

/*creo el mazo como objeto*/
class MazoDeCartas{
    constructor(cartas = crearMazoDeCartas()){
    this.cartas = cartas;
    }

    get cantidadDeCartas() {
        return this.cartas.length;
    }

    mezclar(){
        for (let i = this.cantidadDeCartas - 1 ; i > 0; i--) {
            const mazoMezclado = Math.floor(Math.random() * (i + 1));
            const mazoSinMezclar = this.cartas[mazoMezclado];
            this.cartas[mazoMezclado] = this.cartas[i];
            this.cartas[i] = mazoSinMezclar;
        }
        return mazo;
    }
    repartir(){
        return this.cartas.pop();
    }
}

const mazo = new MazoDeCartas;
console.log(mazo.mezclar());

const baraja = JSON.stringify(mazo);

function iniciarPartida(){
   const btn_div = document.getElementById("btn");
   btn_div.addEventListener('click', () => mazo.repartir());
    cartaOculta = mazo.repartir();
    let cardImg = document.createElement("img");
    let carta = mazo.repartir();
    cardImg.src = "./img/" + carta + ".png";
    document.getElementById("cartas-j1").append(cardImg);
}





















