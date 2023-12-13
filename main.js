let emojiOnFeliz = document.getElementById("feliz");
let emojiOnTriste = document.getElementById("triste");
let emojiOnEnfadado = document.getElementById("enfadado");
let emojiOnMiedoso = document.getElementById("miedoso");
let iconsStop = document.getElementsByClassName("iconStop");

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
    showReproduccionFeliz.style.display = "none";
    soundTriste.pause();
    soundTriste.currentTime = 0;
    showReproduccionTriste.style.display = "none";
    soundEnfadado.pause();
    soundEnfadado.currentTime = 0;
    showReproduccionEnfadado.style.display = "none";
    soundMiedoso.pause();
    soundMiedoso.currentTime = 0;
    showReproduccionMiedoso.style.display = "none";
}

function resetAllImages() {
    emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-feliz.png')";
    emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-triste.png')";
    emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-enfadado.png')";
    emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-miedoso.png')";
}

emojiOnFeliz.onclick = function() {
    if (soundFeliz.paused) {
        stopAllSounds();
        resetAllImages();
        soundFeliz.play();
        showReproduccionFeliz.style.display = "block";
        emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-clic-feliz.png')";
    } else {
        soundFeliz.pause();
        showReproduccionFeliz.style.display = "none";
        emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-feliz.png')";
    }
}

emojiOnFeliz.onmouseover = function() {
    emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-clic-feliz.png')";
}

emojiOnFeliz.onmouseout = function() {
    if (soundFeliz.paused) {
        emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-feliz.png')";
    } else {
        emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-clic-feliz.png')";
    }
}

emojiOnTriste.onclick = function() {
    if (soundTriste.paused) {
        stopAllSounds();
        resetAllImages();
        soundTriste.play();
        showReproduccionTriste.style.display = "block";
        emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-clic-triste.png')";
    } else {
        soundTriste.pause();
        showReproduccionTriste.style.display = "none";
        emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-triste.png')";
    }
}

emojiOnTriste.onmouseover = function() {
    emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-clic-triste.png')";
}

emojiOnTriste.onmouseout = function() {
    if (soundTriste.paused) {
        emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-triste.png')";
    } else {
        emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-clic-triste.png')";
    }
}

emojiOnEnfadado.onclick = function() {
    if (soundEnfadado.paused) {
        stopAllSounds();
        resetAllImages();
        soundEnfadado.play();
        showReproduccionEnfadado.style.display = "block";
        emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-clic-enfadado.png')";
    } else {
        soundEnfadado.pause();
        showReproduccionEnfadado.style.display = "none";
        emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-enfadado.png')";
    }
}

emojiOnEnfadado.onmouseover = function() {
    emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-clic-enfadado.png')";
}

emojiOnEnfadado.onmouseout = function() {
    if (soundEnfadado.paused) {
        emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-enfadado.png')";
    } else {
        emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-clic-enfadado.png')";
    }
}

emojiOnMiedoso.onclick = function(){
    if (soundMiedoso.paused) {
        stopAllSounds();
        resetAllImages();
        soundMiedoso.play();
        showReproduccionMiedoso.style.display = "block";
        emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-clic-miedoso.png')";
    } else {
        soundMiedoso.pause();
        showReproduccionMiedoso.style.display = "none";
        emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-miedoso.png')";
    }
}

emojiOnMiedoso.onmouseover = function() {
    emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-clic-miedoso.png')";
}

emojiOnMiedoso.onmouseout = function() {
    if (soundMiedoso.paused) {
        emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-miedoso.png')";
    }else{
        emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-clic-miedoso.png')";
    }
}


for (let i = 0; i < iconsStop.length; i++) {
    iconsStop[i].onclick = function() {
        stopAllSounds();
        resetAllImages();
    }
}

document.onkeydown = function(e) {
    switch (e.key) {
        case 'A':
        case 'a':
            if (soundFeliz.paused) {
                stopAllSounds();
                resetAllImages();
                soundFeliz.play();
                showReproduccionFeliz.style.display = "block";
                emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-clic-feliz.png')";
            } else {
                soundFeliz.pause();
                soundFeliz.currentTime = 0;
                showReproduccionFeliz.style.display = "none";
                emojiOnFeliz.style.backgroundImage = "url('/imgs/emojis-feliz.png')";
            }
            break;
        case 'T':
        case 't':
            if (soundTriste.paused) {
                stopAllSounds();
                resetAllImages();
                soundTriste.play();
                showReproduccionTriste.style.display = "block";
                emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-clic-triste.png')";
            } else {
                soundTriste.pause();
                soundTriste.currentTime = 0;
                showReproduccionTriste.style.display = "none";
                emojiOnTriste.style.backgroundImage = "url('/imgs/emojis-triste.png')";
            }
            break;
        case 'E':
        case 'e':
            if (soundEnfadado.paused) {
                stopAllSounds();
                resetAllImages();
                soundEnfadado.play();
                showReproduccionEnfadado.style.display = "block";
                emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-clic-enfadado.png')";
            } else {
                soundEnfadado.pause();
                soundEnfadado.currentTime = 0;
                showReproduccionEnfadado.style.display = "none";
                emojiOnEnfadado.style.backgroundImage = "url('/imgs/emojis-enfadado.png')";
            }
            break;
        case 'M':
        case 'm':
            if (soundMiedoso.paused) {
                stopAllSounds();
                resetAllImages();
                soundMiedoso.play();
                showReproduccionMiedoso.style.display = "block";
                emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-clic-miedoso.png')";
            } else {
                soundMiedoso.pause();
                soundMiedoso.currentTime = 0;
                showReproduccionMiedoso.style.display = "none";
                emojiOnMiedoso.style.backgroundImage = "url('/imgs/emojis-miedoso.png')";
            }
            break;
        default:
            break;
    }
}



//Función para mostrar el contenido de Alegría
const botonAlegria = document.getElementById("botonAlegria");
const contentAlegria = document.getElementById("contentAlegria");

// Agregamos un evento de clic al botón
botonAlegria.addEventListener("click", function() {
  // Verificamos si el contenido ya está visible o no
  if (contentAlegria.style.display === "none" || contentAlegria.style.display === "") {
    // Si no está visible, lo mostramos
    contentAlegria.style.display = "flex";
    contentAlegria.style.justifyContent = "center";
    contentAlegria.style.alignItems = "center";
    contentAlegria.style.flexDirection = "column"
  } else {
    // Si ya está visible, lo ocultamos
    contentAlegria.style.display = "none";
  }
});


//Función para mostrar/ocultar las flechas
let flechaYellowActive = document.getElementById("flechaYellow");
let flechaGreenActive = document.getElementById("flechaGreen");
let flechaRedActive = document.getElementById("flechaRed");
let flechaPurpleActive = document.getElementById("flechaPurple");

botonAlegria.addEventListener("click", function() {
    // Verificamos si la opacidad es 0 o 100
    if (flechaYellowActive.style.opacity === "0" || flechaYellowActive.style.opacity === "") {
      // Si es 0, lo subimos a 100
      flechaYellowActive.style.opacity = "100";
    } else {
      // Si es 100, lo bajamos a 0
      flechaYellowActive.style.opacity = "0";
    }
  });



// Función para reproducir la melodía alegría en midi
const listenMelodyElement = document.querySelector(".listenMelody");
const melodiaAlegriaAudio = document.getElementById("melodiaAlegria");

// Agregamos un evento de clic al elemento "listenMelody"
listenMelodyElement.addEventListener("click", function() {
  // Verificamos si el audio ya está reproduciéndose o no
  if (melodiaAlegriaAudio.paused) {
    // Si está en pausa, lo reproducimos
    melodiaAlegriaAudio.play();
  } else {
    // Si está reproduciéndose, lo pausamos
    melodiaAlegriaAudio.pause();
  }
});