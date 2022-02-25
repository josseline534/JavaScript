let lienzo = torre.getContext("2d");
let papel = area.getContext("2d");
const dibujarLinea = (color, xi, yi, xf, yf, lienzo, ancho) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = ancho;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};
for (let i = 0; i < 601; i = i + 10) {
    dibujarLinea("pink", 0, i, i + 10, 600, lienzo, 1);
}
for (let i = 600; i >= 0; i = i - 10) {
    dibujarLinea("pink", i, 0, 600, i - 10, lienzo, 1);
}
for (let i = 600; i >= 0; i = i - 10) {
    dibujarLinea("pink", 600, (i - 600) * -1, i, 600, lienzo, 1);
}
for (let i = 600; i >= 0; i = i - 10) {
    dibujarLinea("pink", i, 0, 0, (i - 600) * -1, lienzo, 1);
}
let x = 20;
let y = 300;
dibujarLinea("blue", x - 1, y - 1, x + 1, y + 1, papel, 3);
let teclas = {
    UP: 38,
    DOWN: 40,
    RIGTH: 39,
    LEFT: 37,
};

const moveArea = (event) => {
    let color = "blue";
    switch (event.keyCode) {
        case teclas.UP:
            console.log("arriba");
            dibujarLinea(color, x, y, x, y - 10, papel, 3);
            y = y - 10;
            break;
        case teclas.DOWN:
            console.log("abajo");
            dibujarLinea(color, x, y, x, y + 10, papel, 3);
            y = y + 10;
            break;
        case teclas.RIGTH:
            console.log("derecha");
            dibujarLinea(color, x, y, x + 10, y, papel, 3);
            x = x + 10;
            break;
        case teclas.LEFT:
            console.log("izquierda");
            dibujarLinea(color, x, y, x - 10, y, papel, 3);
            x = x - 10;
            break;
        default:
            break;
    }
};
document.addEventListener("keyup", moveArea);
