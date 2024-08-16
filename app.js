let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste intentando ${intentos} ${(intentos === 1) ? 'vez':'veces'}` );  
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero es menor')
        } else {
            asignarTextoElemento('p','el numero es mayor')
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta en la lista
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya adivinaste todos los numeros')
    
    } else {

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else { 
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reiniciarJuego() {
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
console.log(numeroSecreto);