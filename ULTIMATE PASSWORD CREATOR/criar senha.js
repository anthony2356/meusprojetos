function gerar_senha() {
    var números2 = Math.random(0, 1)
    var números4 = Math.random(0, 1)
    var uppercase = document.getElementById('uppercase').value
    var lowercase = document.getElementById('lowercase').value
    var symbols = document.getElementById('simbols').value
    var senha_complexa1 = document.getElementById('password-created').
    value = uppercase + symbols
    + números2 + symbols + lowercase + 
    números4 + uppercase + symbols + lowercase
    alert("Password Created: " + senha_complexa1)
}