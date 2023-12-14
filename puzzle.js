// El ejercicio se resuelve en dos partes:
// - Colocar las piezas de forma aleatoria
// - Generar el espacio donde tienen que colocarse

const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2', 'imagen-3'
];

const puzzle = document.getElementById("puzzle");
const piezas = document.getElementById("piezas");
const mensaje = document.getElementById("mensaje");

let terminado = imagenes.length;


//COLOCAR PIEZAS DE FORMA ALEATORIA:
//un ciclo de repetición
while (imagenes.length) {
    //piezas aleatorias
    const index = Math.floor(Math.random() * imagenes.length);
    //dibujar en pantalla las piezas del rompecabezas
    //creamos un div
    const div = document.createElement("div");
    div.className = "pieza";
    div.id = imagenes[index];
    //hacemos el div arrastable
    div.draggable = true;
    //asignamos la imagen que corresponda (la imagen de cada trozo de partitura)
    div.style.backgroundImage = `url("imgs/${imagenes[index]}.jpg")`;
    // lo colocamos en el contenedor pieza
    piezas.appendChild(div);
    imagenes.splice(index, 1);
}

//GENERAR EL ESPACIO DONDE TIENEN QUE COLOCASE LAS PIEZAS
for (let i = 0; i < terminado; i++) {
    //creamos un div
    const div = document.createElement("div");
    //le asignamos la clase que hemos definido en el css
    div.className = "placeholder";
    //creamos un data id para cada hueco del puzzle, para que podamos asignarle una imagen correcta
    div.dataset.id = i;
    puzzle.appendChild(div);
}

//DRAG AND DROP
piezas.addEventListener('dragstart', e => {
    //con setData transferimos información: el data id que creamos anteriormente para cada ipieza
    e.dataTransfer.setData('id', e.target.id);
});

//Los eventos los pone a los contenedores, a los huecos en los que tiene que ir cada pieza
puzzle.addEventListener("dragover", e => {
    e.preventDefault();
    //damos al usuario una respuesta visual de que está ocurriendo algo:
    //el hueco por el que pasa la pieza (over) se colorea
    //para eso le asignamos una clase definida en style.css
    e.target.classList.add("hover");
})

//Tenemos que quitar ese estilo hover para que no permanezca todo el tiempo
puzzle.addEventListener("dragleave", e => {
    e.target.classList.remove("hover");
});

puzzle.addEventListener("drop", e => {
    e.target.classList.remove("hover");
    //recuperamos información, antes setData, ahora getData
    const id = e.dataTransfer.getData("id");
    //para identificar cada imagen me quiero quedar solo con el número de la imagen,
    //split quita el guión del nombre "imagen-4"
    //devuelve un array que tiene la posición 0 = imagen
    //y la posición 1 = 4 el número
    const numero = id.split('-')[1];
    //el número anterior es el número de la pieza,
    //el id siguiente es el de la caja

    //aquí preguntamos si el número de la imagen y el id de la caja es el mismo
    if (e.target.dataset.id === numero){
        //si son iguales creo un appendChild para que la imagen del trozo de partitura se agregue al contenedor y quede fija
        e.target.appendChild(document.getElementById(id));
        //MOSTRAR MENSAJE CUANDO SE COMPLETA EL PUZZLE
        //cambiamos el estilo css de yellow para que cambie cuando se completa el puzzle
        //y mostramos el elemento con el id="mensaje" que previamente estaba oculto
        //terminado es igual a la longitud de las imagenes
        //si terminado = 0 ganaste!
        terminado--;
        if (terminado === 0) {
            let fondoJuego = document.getElementById("yellow");
            let completado = document.getElementById("mensaje");
            fondoJuego.style.backgroundColor = "#FF5500";
            completado.style.display = "block";
        }
    }
});