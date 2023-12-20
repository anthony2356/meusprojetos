function billgates_mode() {
    var numbers = document.getElementById('numbers').value;
    var uppercase = document.getElementById('uppercase').value;
    var lowercase = document.getElementById('lowercase').value;
    var symbols = document.getElementById('simbols').value;
    var security_random_number_sequence = Math.random(0,9)
    var senha_complexa1 = uppercase + symbols +
     numbers + symbols + lowercase + security_random_number_sequence + 
     symbols + lowercase
     + uppercase + symbols + uppercase + numbers + symbols + lowercase
     + uppercase + security_random_number_sequence + lowercase + uppercase 
     + uppercase + numbers
     numbers + numbers + numbers + numbers + symbols + lowercase + uppercase 
     + symbols + lowercase + security_random_number_sequence
     document.getElementById('password-created').value = 
    senha_complexa1
  }