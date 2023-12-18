function client_mode() {
    var numbers = document.getElementById('numbers').value;
    var uppercase = document.getElementById('uppercase').value;
    var lowercase = document.getElementById('lowercase').value;
    var symbols = document.getElementById('simbols').value;
    var security_random_number_sequence = Math.random(0,9)
      document.getElementById('password-created').
      value = uppercase + symbols
      + numbers + numbers * security_random_number_sequence 
      + symbols + lowercase + security_random_number_sequence 
      + symbols + uppercase;
  }