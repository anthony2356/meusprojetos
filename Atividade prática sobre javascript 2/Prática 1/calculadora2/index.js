function cálculo1() {
    let valor1 = Number(document.getElementById('valor_um').value);
    let valorUniversal = Number(document.getElementById('valor_universal').value);
    c1 = valor1 + valorUniversal
    alert('o resultado da conta será : ' + c1);
}
function cálculo2() {
    let valor1 = Number(document.getElementById('valor_dois').value);
    let valorUniversal = Number(document.getElementById('valor_universal').value);
    c2 = valor1 - valorUniversal
    alert('o resultado da conta será : ' + c2);
}
function cálculo3() {
    let valor1 = Number(document.getElementById('valor_tres').value);
    let valorUniversal = Number(document.getElementById('valor_universal').value);
    c3 = valor1 * valorUniversal
    alert('o resultado da conta será : ' + c3);
}
function cálculo4() {
    let valor1 = Number(document.getElementById('valor_quatro').value);
    let valorUniversal = Number(document.getElementById('valor_universal').value);
    c4 = valor1 / valorUniversal
    alert('o resultado da conta será : ' + c4);
}

function mostrar_todos_os_resultados() {
    cálculo1()
    cálculo2()
    cálculo3()
    cálculo4()
}

function limpar_todos_os_campos() {
    alert('removendo valores...')
    alert('valores removidos com sucesso !')
    let valorUniversal = Number(document.getElementById('valor_universal').value);
    document.getElementById('valor_universal').value = "";
    let valor1 = Number(document.getElementById('valor_um').value);
    document.getElementById('valor_um').value = "";
    let valor2 = Number(document.getElementById('valor_dois').value);
    document.getElementById('valor_dois').value = "";
    let valor3 = Number(document.getElementById('valor_tres').value);
    document.getElementById('valor_tres').value = "";
    let valor4 = Number(document.getElementById('valor_quatro').value);
    document.getElementById('valor_quatro').value = "";
}

function limpar_valor_universal() {
    alert('limpando valores de Valor Universal..')
    alert('valores removidos com sucesso !')
    let valorUniversal = Number(document.getElementById('valor_universal').value);
    document.getElementById('valor_universal').value = "";
}