function mostrar_código_if() {
    let valor1 = 20
    let valor2 = 300
    let cálculo = valor2 + valor1
    if (cálculo = 320) {
        alert('o cálculo está correto e o valor é ' + cálculo)
    }
}

function mostrar_código_else_if() {
    let valor1 = 20
    let valor2 = 300
    let valor3 = 240
    let cálculo = valor1 + valor2 + valor3
    if (cálculo = 560) {
        alert('o cálculo está correto, muito bem ' + cálculo)
    } else if (cálculo = 120) {
        alert('o cálculo está incorreto pois o cálculo acima está somando e não subtraindo.')
    }
}

function mostrar_código_else() {
    let valor1 = 200
    let valor2 = 300
    let valor3 = 400
    let valor4 = 500
    let cálculo = valor1 + valor2 + valor3 + valor4
    if (cálculo = 1400) {
        alert('o cálculo está certo ! ' + cálculo)
    } else if (cálculo = 0) {
        alert('o cálculo está incorreto pois o cálculo acima está somando e não subtraindo')
    } else {
        alert('erro ao cálcular')
    }
}

function mostrar_o_código_fonte_de_todos_eles() {
    alert(mostrar_código_if)
    alert(mostrar_código_else_if)
    alert(mostrar_código_else)
}