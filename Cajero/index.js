class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
    mostrar() {
        document.body.appendChild(this.valor);
    }
}
let dinero = 0;
const caja = [];
let entregado = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
caja.push(new Billete(5, 25));
caja.push(new Billete(1, 100));

console.log(caja);

entregarDinero = () => {
    entregado = [];
    dinero = number.value;
    let papeles = 0;
    if (dinero > 0) {
        for (let b of caja) {
            if (dinero > 0) {
                let div = Math.floor(dinero / b.valor);
                if (div > b.cantidad) {
                    papeles = b.cantidad;
                } else {
                    papeles = div;
                }
                entregado.push(new Billete(b.valor, papeles));
                dinero = dinero - b.valor * papeles;
            }
        }
        if (dinero === 0) {
            resultado.innerHTML = "";
            for (const e of entregado) {
                if (e.cantidad > 0)
                    resultado.innerHTML = `${resultado.innerHTML} <br/> Recibe ${e.cantidad} billetes de $${e.valor}`;
            }
        } else alert("El monto indicado no esta disponible");
    } else alert("Debe ingresar un valor a retirar");
};
