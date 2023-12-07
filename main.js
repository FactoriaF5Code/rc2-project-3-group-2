let emojiOnFeliz = document.getElementById("feliz");
let emojiOnTriste = document.getElementById("triste");
let emojiOnEnfadado = document.getElementById("enfadado");
let emojiOnMiedoso = document.getElementById("miedoso");

let soundFeliz = document.getElementById("soundFeliz");
let soundTriste = document.getElementById("soundTriste");
let soundEnfadado = document.getElementById("soundEnfadado");
let soundMiedoso = document.getElementById("soundMiedoso");

function stopAllSounds() {
    soundFeliz.pause();
    soundFeliz.currentTime = 0;
    soundTriste.pause();
    soundTriste.currentTime = 0;
    soundEnfadado.pause();
    soundEnfadado.currentTime = 0;
    soundMiedoso.pause();
    soundMiedoso.currentTime = 0;
}

emojiOnFeliz.onclick = function() {
    if (soundFeliz.paused) {
        stopAllSounds();
        soundFeliz.play();
    } else {
        soundFeliz.pause();
    }
}

emojiOnTriste.onclick = function() {
    if (soundTriste.paused) {
        stopAllSounds();
        soundTriste.play();
    } else {
        soundTriste.pause();
    }
}

emojiOnEnfadado.onclick = function() {
    if (soundEnfadado.paused) {
        stopAllSounds();
        soundEnfadado.play();
    } else {
        soundEnfadado.pause();
    }
}

emojiOnMiedoso.onclick = function(){
    if (soundMiedoso.paused) {
        stopAllSounds();
        soundMiedoso.play();
    } else {
        soundMiedoso.pause();
    }
}