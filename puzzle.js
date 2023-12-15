const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2', 'imagen-3'
];

const puzzle = document.getElementById("puzzle");
const piezas = document.getElementById("piezas");
const mensaje = document.getElementById("mensaje");

let terminado = imagenes.length;


while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length);
    const div = document.createElement("div");
    div.className = "pieza";
    div.id = imagenes[index];
    div.draggable = true;
    div.style.backgroundImage = `url("imgs/${imagenes[index]}.jpg")`;
    piezas.appendChild(div);
    imagenes.splice(index, 1);
}

for (let i = 0; i < terminado; i++) {
    const div = document.createElement("div");
    div.className = "placeholder";
    div.dataset.id = i;
    puzzle.appendChild(div);
}


piezas.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.cursor = "pointer";
    })

piezas.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});

puzzle.addEventListener("dragover", e => {
    e.preventDefault();
    e.target.classList.add("hover");
})

puzzle.addEventListener("dragleave", e => {
    e.target.classList.remove("hover");
});

puzzle.addEventListener("drop", e => {
    e.target.classList.remove("hover");
    const id = e.dataTransfer.getData("id");
    const numero = id.split('-')[1];

    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id));
        terminado--;
        if (terminado === 0) {
            let fondoJuego = document.getElementById("yellow");
            let completado = document.getElementById("mensaje");
            fondoJuego.style.backgroundColor = "#FF5500";
            completado.style.display = "block";
        }
    }
});

const piezaImagen0 = document.querySelector(".pieza#imagen-0");
let sonidoActivo;
piezaImagen0.addEventListener("mousedown", () => {
    const corteAlegria1 = document.getElementById("corteAlegria1");
    corteAlegria1.play();
});

piezaImagen0.addEventListener("mouseup", () => {
    corteAlegria1.pause();
    corteAlegria1.currentTime = 0;
});

piezaImagen0.addEventListener("dragend", () => {
    corteAlegria1.pause();
    corteAlegria1.currentTime = 0;
});

const piezaImagen1 = document.querySelector(".pieza#imagen-1");
piezaImagen1.addEventListener("mousedown", () => {
    const corteAlegria2 = document.getElementById("corteAlegria2");
    sonidoActivo = corteAlegria2;
    corteAlegria2.play();
});

piezaImagen1.addEventListener("mouseup", () => {
    corteAlegria2.pause();
    corteAlegria2.currentTime = 0;
});

piezaImagen1.addEventListener("dragend", () => {
    corteAlegria2.pause();
    corteAlegria2.currentTime = 0;
});

const piezaImagen2 = document.querySelector(".pieza#imagen-2");
piezaImagen2.addEventListener("mousedown", () => {
    const corteAlegria3 = document.getElementById("corteAlegria3");
    sonidoActivo = corteAlegria3;
    corteAlegria3.play();
});

piezaImagen2.addEventListener("mouseup", () => {
    corteAlegria3.pause();
    corteAlegria3.currentTime = 0;
});

piezaImagen2.addEventListener("dragend", () => {
    corteAlegria3.pause();
    corteAlegria3.currentTime = 0;
});

const piezaImagen3 = document.querySelector(".pieza#imagen-3");
piezaImagen3.addEventListener("mousedown", () => {
    const corteAlegria4 = document.getElementById("corteAlegria4");
    sonidoActivo = corteAlegria4;
    corteAlegria4.play();
});

piezaImagen3.addEventListener("mouseup", () => {
    corteAlegria4.pause();
    corteAlegria4.currentTime = 0;
});

piezaImagen3.addEventListener("dragend", () => {
    corteAlegria4.pause();
    corteAlegria4.currentTime = 0;
});