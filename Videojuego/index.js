/* const max = 40;
const min = 10;
const myNumber = Math.floor(Math.random() * (max - min + 1)) + min;
alert("hola: " + myNumber); */

idCanvas.width = 500;
idCanvas.height = 500;
const lienzo = idCanvas.getContext("2d");

let fondo = {
    url: "./img/tile.webp",
    loadOk: false,
    imagen: null,
};

let vaca = {
    url: "./img/vaca.webp",
    loadOk: false,
    imagen: null,
};

let cerdo = {
    url: "./img/cerdo.webp",
    loadOk: false,
    imagen: null,
};

let pollo = {
    url: "./img/pollo.webp",
    loadOk: false,
    imagen: null,
};
fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
pollo.imagen = new Image();

fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
pollo.imagen.src = pollo.url;

const loadFondo = () => {
    fondo.loadOk = true;
    dibujar();
};
const loadVaca = () => {
    vaca.loadOk = true;
    dibujar();
};
const loadCerdo = () => {
    cerdo.loadOk = true;
    dibujar();
};
const loadPollo = () => {
    pollo.loadOk = true;
    dibujar();
};

const dibujar = () => {
    let min = 5;
    let max = 25;
    if (fondo.loadOk) lienzo.drawImage(fondo.imagen, 0, 0);
    if (vaca.loadOk) {
        animals(vaca.imagen, aleatorio(max, min));
    }
    if (cerdo.loadOk) animals(cerdo.imagen, aleatorio(max, min));
    if (pollo.loadOk) animals(pollo.imagen, aleatorio(max, min));
};

const animals = (animal, cant) => {
    let min = 0;
    let max = 7;
    for (let i = 0; i < cant; i++)
        lienzo.drawImage(
            animal,
            aleatorio(max, min) * 60,
            aleatorio(max, min) * 85
        );
};

fondo.imagen.addEventListener("load", loadFondo);
vaca.imagen.addEventListener("load", loadVaca);
cerdo.imagen.addEventListener("load", loadCerdo);
pollo.imagen.addEventListener("load", loadPollo);

const aleatorio = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
