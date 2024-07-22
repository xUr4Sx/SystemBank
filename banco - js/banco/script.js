class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Cliente extends Persona {
    constructor(nombre, edad, saldo) {
        super(nombre, edad);
        this.saldo = saldo;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            return true;
        } else {
            return false;
        }
    }

    consignar(monto) {
        this.saldo += monto;
    }
}

const cliente = new Cliente("Octavio Jimenez", 35, 5000);

function mostrarDatosCliente() {
    document.getElementById("nombre").textContent = cliente.nombre;
    document.getElementById("edad").textContent = cliente.edad;

    const saldoElement = document.getElementById("saldo");
    const consultarBtn = document.getElementById("consultarBtn");
    const ocultarBtn = document.getElementById("ocultarBtn");

    saldoElement.textContent = "****";
    consultarBtn.style.display = "inline";
    ocultarBtn.style.display = "none";
}

function mostrarSaldo() {
    document.getElementById("saldo").textContent = cliente.saldo;
    document.getElementById("consultarBtn").style.display = "none";
    document.getElementById("ocultarBtn").style.display = "inline";
}

function ocultarSaldo() {
    document.getElementById("saldo").textContent = "****";
    document.getElementById("consultarBtn").style.display = "inline";
    document.getElementById("ocultarBtn").style.display = "none";
}

function retirar(event) {
    event.preventDefault();
    const monto = parseFloat(document.getElementById("monto").value);

    if (cliente.retirar(monto)) {
        mostrarDatosCliente();
        alert("Retiro exitoso.");
    } else {
        alert("Fondos insuficientes para el retiro.");
    }
}

function consignar() {
    const montoInput = document.getElementById("monto");
    const monto = parseFloat(montoInput.value);

    if (isNaN(monto) || monto <= 0 || !Number.isInteger(monto)) {
        alert("Por favor, ingresa un valor válido como número entero mayor que cero para consignar.");
        return;
    }

    cliente.consignar(monto);
    mostrarDatosCliente();
    alert("Consignación exitosa.");

    montoInput.value = "";
}

document.getElementById("operaciones-form").addEventListener("submit", retirar);

document.getElementById("consultarBtn").addEventListener("click", mostrarSaldo);
document.getElementById("ocultarBtn").addEventListener("click", ocultarSaldo);

mostrarDatosCliente();