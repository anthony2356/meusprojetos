function criar(){
     let LM = document.getElementById('com letras maiúsculas').value
     let lm = document.getElementById('com letras minúsculas').value
     let num = Math.random(0,1)
     let symbols = document.getElementById('símbolos').value
     document.getElementById('senha').innerHTML = LM + lm + num + symbols
}