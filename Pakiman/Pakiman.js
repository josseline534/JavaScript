let imagenes = [];
imagenes["Cauchin"] = "./img/vaca.webp";
imagenes["Pokacho"] = "./img/pollo.webp";
imagenes["Tocinauro"] = "./img/cerdo.webp";
export default class Pakiman {
    constructor(nombre, vida, poder) {
        //this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.poder = poder;

        //this.imagen.src = imagenes[this.nombre];
    }

    /* hablar() {
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
    } */
}
