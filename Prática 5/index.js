let myArray = [' 10 ', ' 2678 ', ' 3346 ', ' 4567 ', ' 53245 ',];
let oldArray = [10, 2678, 3346, 4567, 53245]
let newArray = [10, 2678, 3346, 4567, 53245]
let newArray1 = [10, 2678, 3346, 4567, 53245]
let oldArray1 = [10, 2678, 3346, 4567, 53245]
let newArray2 = [10, 2678, 3346, 4567, 53245]
let array1 = [10, 2678, 3346]
let array2 = [10, 2678, 3346]
newArray.unshift(23)
newArray.splice(200)
newArray.push(312)

function mostrar_fileira_de_dados() {
    alert('aqui está sua array --> ' + '[ ' + myArray + ' ]')
}

function mostrar_comprimento_total_da_fileira() {
    alert('aqui está o comprimento da array --> ' + '[ ' + myArray.length + ' ]')
}

function adicionar_novos_elementos() {
    alert('mostrando array anterior --> ' + '[ ' + oldArray + ' ]')
    alert('adicionando novos elementos....')
    alert('elementos adicionados com sucesso --> ' + '[ ' + newArray + ' ]')
    alert('valores adicionais identificados --> ' + '[ ' + '23' + ' e ' + '312' + ' ]')
    alert('erro ao adicionar o valor [ 200 ] ao meio do array')
}

function encontrando_elementos() {
    alert('encontrando elemento....')
    alert('elemento encontrado no índice --> ' + newArray1.indexOf(3346))
    alert('item encontrado --> [3346] e seu índice é ' + newArray1.indexOf(3346))
}

function remover_elementos() {
    alert('antes de iniciarmos a remoção, iremos mostrar o array antes do processo. : ' + '[ ' + oldArray1 + ' ]')
    newArray2.pop();
    alert('removendo elemento... ')
    alert('elemento removido.. --> ' + '[ ' + newArray2 + ' ]')
    alert('detectando posição de remoção [final do array]')
    alert('o elemento removido foi [53245]  do array ' + '[ ' + newArray2 + ' ]')
    newArray2.shift();
    alert('removendo elemento... ')
    alert('elemento removido.. --> ' + '[ ' + newArray2 + ' ]')
    alert('detectando posição de remoção [início do array]')
    alert('o elemento removido foi [10]  do array ' + '[ ' + newArray2 + ' ]')
}