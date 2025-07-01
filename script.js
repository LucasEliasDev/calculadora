const visor = document.getElementById('resultado');

function insert(numero) {

    let numeroDaTela = visor.innerHTML;
    visor.innerHTML = numeroDaTela + numero;
};

function clean() {
    visor.innerHTML = "";
};

function back() {
    let numeroDaTela = visor.innerHTML
    visor.innerHTML = numeroDaTela.substring(0,numeroDaTela.length -1);
};


function calcular() {
    let resultado = visor.innerHTML
    
    if (resultado) {
        
     visor.innerHTML = eval(resultado);
} else {
    visor.innerHTML = ""
}
};