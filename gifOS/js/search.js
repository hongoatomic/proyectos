let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByTagName("img")[0];
let form = document.getElementById("search-form");
let rand = document.getElementById("random");
let misgifs = document.getElementsByClassName("misgifs")[0];

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    form.id = "search-form-o";
    rand.id = "random-o";
    misgifs.style.color = "#FFFFFF";
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFFFFF";
    logo.src = "./assets/gifOF_logo.png";
    form.id = "search-form";
    rand.id = "random";
    misgifs.style.color = "#110038";
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}