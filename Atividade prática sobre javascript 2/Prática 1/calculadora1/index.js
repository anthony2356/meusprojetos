function insertNumbers(number) {
    let insert = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = insert + number;
} function insertSymbols(symbols) {
    let insertSymbols = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = insertSymbols + symbols;
} function clearData() {
    let clear = document.getElementById('resultado').innerHTML = '';
} function calculate() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        alert('ERROR')
    }
}