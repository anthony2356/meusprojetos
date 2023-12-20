function modo_ultimato() {
    var numbers = document.getElementById('numbers').value;
    var uppercase = document.getElementById('uppercase').value;
    var twodots = ":::";
    var lowercase = document.getElementById('lowercase').value;
    var pi = 3.14159265358;
    var symbols = document.getElementById('simbols').value;
    var random_sequence1 = Math.random(0, 1);
    var random_sequence2 = Math.random(0, 1);
    var random_sequence3 = Math.random(0, 1);
    var wtf = twodots + random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots;
    document.getElementById('password-created').
      value = uppercase + symbols + wtf
      + numbers + symbols + wtf + lowercase + uppercase + wtf + symbols + lowercase;
  }