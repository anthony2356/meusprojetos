function thanos_mode() {
    var numbers = document.getElementById('numbers').value * Math.random(0, 1);
    var uppercase = document.getElementById('uppercase').value;
    var twodots = ":::";
    var lowercase = document.getElementById('lowercase').value;
    var pi = 3.14159265358 * Math.random(0, 1);
    var symbols = document.getElementById('simbols').value;
    var random_sequence1 = Math.random(0, 1);
    var random_sequence2 = Math.random(0, 1);
    var random_sequence3 = Math.random(0, 1);
    var ayo_wtf = random_sequence1 * numbers * random_sequence2 * numbers * random_sequence3 * Math.random(0, 1)
    var wtf = twodots + random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots;
    var wtf3 = twodots + random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots * wtf + ayo_wtf
    var insane =  uppercase + symbols + wtf + ayo_wtf
      + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + 
      uppercase + symbols + wtf + ayo_wtf
      + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf
      + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf +
      lowercase + wtf + wtf + ayo_wtf
      + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf
      + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
    var thanos = uppercase + symbols + wtf + ayo_wtf
      + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase
      uppercase + symbols + wtf + ayo_wtf
      + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + 
      uppercase + symbols + wtf + ayo_wtf
      + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf
      + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf +
      lowercase + wtf + wtf + ayo_wtf
      + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf
      + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + insane;
    var thanos2 = thanos + insane + wtf3;
    document.getElementById('password-created').value = thanos2
  }s