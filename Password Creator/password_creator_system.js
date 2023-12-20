function gerar_senha() {
    var numbers = document.getElementById('numbers').value;
    var uppercase = document.getElementById('uppercase').value;
    var lowercase = document.getElementById('lowercase').value;
    var symbols = document.getElementById('simbols').value;
    document.getElementById('password-created').
      value = uppercase + symbols
      + numbers + symbols + lowercase + uppercase + symbols + lowercase;
  }