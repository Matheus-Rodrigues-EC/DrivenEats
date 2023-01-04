let Prato = "";
let Bebida = "";
let Sobremesa = "";

function Prato1(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "#32B72F"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "transparent"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "transparent"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "transparent"
    Prato = document.getElementById("Prato1").querySelector(".NameRequest").innerHTML;
    console.log(Prato);
}
function Prato2(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "transparent"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "#32B72F"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "transparent"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "transparent"
    Prato = document.getElementById("Prato2").querySelector(".NameRequest").innerHTML;
    console.log(Prato);
}
function Prato3(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "transparent"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "transparent"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "#32B72F"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "transparent"
    Prato = document.getElementById("Prato3").querySelector(".NameRequest").innerHTML;
    console.log(Prato);
}
function Prato4(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "transparent"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "transparent"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "transparent"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "#32B72F"
    Prato = document.getElementById("Prato4").querySelector(".NameRequest").innerHTML;
    console.log(Prato);
}

function ToggleMode(button){
    const teste = document.getElementById("ResponseDisable");

    teste.style.backgroundColor = "#32B72F";
    teste.innerText = "Fechar Pedido";
}