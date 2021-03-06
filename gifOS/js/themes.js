let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByTagName("img")[0];
let form = document.getElementById("search-form");
let counter = document.getElementById("counter");
let misgifs = document.getElementById("misgifs");
let hidden = document.querySelector("select#themes");
let lupa = document.querySelector("img.lupa");
let tituloGif = document.getElementsByTagName("span");
let verMas = document.getElementsByClassName("boton-gif");
let searchSubmit = document.getElementsByClassName("submit-search")[0];
let crearGuifos = document.getElementById("crear-guifos");
let hoverGif = document.getElementsByTagName("p");

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    form.id = "search-form-o";
    counter.id = "counter-o";
    misgifs.style.color = "#FFFFFF";
    misgifs.id = "misgifs-o";
    hidden.style.color = "#ffffff";
    hidden.style.backgroundColor = "#EE3EFE";
    lupa.src = "./assets/lupa_light.svg";
    searchSubmit.className = "submit-search-o";
    crearGuifos.id = "crear-gifos-o";

    for (let a = 0; a < verMas.length; a++) {
        for (let b = 0; b < tituloGif.length; b++) {
            for (let c = 0; c < hoverGif.length; c++) {
                verMas[a].style.backgroundColor = "#2E32FB";
                tituloGif[b].id = "titlegif-o";
                hoverGif[c].id = "hovergif-o";
            }
        }
    }
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFF4FD";
    logo.src = "./assets/gifOF_logo.png";
    form.id = "search-form";
    counter.id = "counter";
    misgifs.style.color = "#110038";
    misgifs.id = "misgifs";
    hidden.style.color = "#110038";
    hidden.style.backgroundColor = "#F7C9F3";
    lupa.src = "./assets/lupa_inactive.svg";
    searchSubmit.className = "submit-search";
    crearGuifos.id = "crear-gifos";

    for (let a = 0; a < verMas.length; a++) {
        for (let b = 0; b < tituloGif.length; b++) {
            for (let c = 0; c < hoverGif.length; c++) {
                verMas[a].style.backgroundColor = "#4180F6";
                tituloGif[b].id = "titlegif";
                hoverGif[c].id = "hovergif";
            }
        }
    }
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}
