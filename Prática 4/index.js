function mostrarAsFunçõesExistentes() {
    alert('mostrando função de fábrica --> ' + criarCelular);
    alert('mostrando função de construção --> ' + celular);
    alert('mostrando função de flecha ' + construção_celular_dados);
} function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('fazendo ligação');
        }
    }
} const celular1 = criarCelular('zenfone', 5.5, 5000);
console.log(celular1); function celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function () {
            console.log('fazendo ligação');
        }
} function construção_celular_dados() {
    const novoCelular = new novoCelular('dell', 20.20, 90000);
    console.log(novoCelular);
    const marcas = [
        { id: 1, nome: 'a' },
        { id: 2, nome: 'b' }
    ]; console.log(marcas.find(function (marca) {
        return marca.nome === 'a';
    })); const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
    console.log(materials.map((material) => material.length));
    // Expected output: Array [8, 6, 7, 9]

}



