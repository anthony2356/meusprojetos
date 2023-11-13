function gerar_senha() {
    //var números1 = Math.random(0,1) //valor aleatório adicional que deixa a senha gigantesca
    var números2 = Math.random(0,1)
    //var números3 = Math.random(0.1) //valor aleatório adicional que deixa a senha gigantesca
    var números4 = Math.random(0,1)
    var senha_complexa1 = 'adf:'+números2+':::nl'+números4+'kç'+'::::ofdsa'
    console.log(document.getElementById("password-created").innerHTML = senha_complexa1);
}