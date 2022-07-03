let numero = document.getElementById('numeroModificable');
let valorNumero = 0;

function aumentar() {
    valorNumero++;
    numero.innerHTML = `${valorNumero}`
}

function decrementar() {
    valorNumero--;
    numero.innerHTML = `${valorNumero}`;
}

function resetear() {
    valorNumero = 0;
    numero.innerHTML = `${valorNumero}`
}