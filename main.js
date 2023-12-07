let emojiOnFeliz = document.getElementById("feliz");
let emojiOnTriste = document.getElementById("triste");
let emojiOnEnfadado = document.getElementById("enfadado");
let emojiOnMiedoso = document.getElementById("miedoso");

let soundFeliz = document.getElementById("soundFeliz");
let soundTriste = document.getElementById("soundTriste");
let soundEnfadado = document.getElementById("soundEnfadado");
let soundMiedoso = document.getElementById("soundMiedoso");

let showReproduccionFeliz = document.getElementById("iconMusicOnFeliz");
let showReproduccionTriste = document.getElementById("iconMusicOnTriste");
let showReproduccionEnfadado = document.getElementById("iconMusicOnEnfadado");
let showReproduccionMiedoso = document.getElementById("iconMusicOnMiedoso");

function stopAllSounds() {
    soundFeliz.pause();
    soundFeliz.currentTime = 0;
    soundTriste.pause();
    soundTriste.currentTime = 0;
    soundEnfadado.pause();
    soundEnfadado.currentTime = 0;
    soundMiedoso.pause();
    soundMiedoso.currentTime = 0;
    showReproduccionFeliz.style.display = "none";
    showReproduccionTriste.style.display = "none";
    showReproduccionEnfadado.style.display = "none";
    showReproduccionMiedoso = "none";
}

emojiOnFeliz.onclick = function() {
    if (soundFeliz.paused) {
        stopAllSounds();
        soundFeliz.play();
        showReproduccionFeliz.style.display = "block";
    } else {
        soundFeliz.pause();
        showReproduccionFeliz.style.display = "none";
    }
}

emojiOnTriste.onclick = function() {
    if (soundTriste.paused) {
        stopAllSounds();
        soundTriste.play();
        showReproduccionTriste.style.display = "block";
    } else {
        soundTriste.pause();
        showReproduccionTriste.style.display = "none";
    }
}

emojiOnEnfadado.onclick = function() {
    if (soundEnfadado.paused) {
        stopAllSounds();
        soundEnfadado.play();
        showReproduccionEnfadado.style.display = "block";
    } else {
        soundEnfadado.pause();
        showReproduccionEnfadado.style.display = "none";
    }
}

emojiOnMiedoso.onclick = function(){
    if (soundMiedoso.paused) {
        stopAllSounds();
        soundMiedoso.play();
        showReproduccionMiedoso = "block";
    } else {
        soundMiedoso.pause();
        showReproduccionMiedoso = "none";
    }
}

