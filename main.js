let emojiOnFeliz = document.getElementById("feliz");
let emojiOnTriste = document.getElementById("triste");
let emojiOnEnfadado = document.getElementById("enfadado");
let emojiOnMiedoso = document.getElementById("miedoso");

emojiOnFeliz.onclick = function() {
    let soundFeliz = document.getElementById("soundFeliz");
    soundFeliz.play();
}

emojiOnTriste.onclick = function() {
    let soundTriste = document.getElementById("soundTriste");
    soundTriste.play();
}

emojiOnEnfadado.onclick = function() {
    let soundEnfadado = document.getElementById("soundEnfadado");
    soundEnfadado.play();
}

emojiOnMiedoso.onclick = function(){
    let soundMiedoso = document.getElementById("soundMiedoso");
    soundMiedoso.play();
}
