let imagenes = [];
imagenes["Cauchin"] = "./img/vaca.webp";
imagenes["Pokacho"] = "./img/pollo.webp";
imagenes["Tocinauro"] = "./img/cerdo.webp";

class Pakiman {
    constructor(nombre, vida, poder) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.poder = poder;

        this.imagen.src = imagenes[this.nombre];
    }

    hablar() {
        console.log(this.nombre);
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write(`<p>
        <strong>${this.nombre}</strong>
        <br/>
        Vida: ${this.vida}
        <br/>
        Poder: ${this.poder}
        </p>`);
    }
}

let cauchin = new Pakiman("Cauchin", 100, 30);
let pokacho = new Pakiman("Pokacho", 80, 50);
let tocinauro = new Pakiman("Tocinauro", 120, 40);

pokacho.mostrar();
console.table(cauchin);
console.table(pokacho);
console.table(tocinauro);
