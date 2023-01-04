class Pedido{
    constructor(Prato, Bebida, Sobremesa, PratoPrice, BebidaPrice, SobremesaPrice, Total){
        this.Prato = Prato;
        this.Bebida = Bebida;
        this.Sobremesa = Sobremesa;
        
        this.PratoPrice = PratoPrice;
        this.BebidaPrice = BebidaPrice;
        this.SobremesaPrice = SobremesaPrice;
        this.Total = Total;
    }
}

// ===--- Funções para os pratos
function Prato1(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "#32B72F"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "transparent"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "transparent"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "transparent"
    Prato = document.getElementById("Prato1").querySelector(".NameRequest").innerHTML;
    PratoPrice = document.getElementById("Prato1").querySelector(".RequestPrice").innerHTML;
    console.log(Prato);
    console.log(PratoPrice);
}
function Prato2(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "transparent"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "#32B72F"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "transparent"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "transparent"
    Prato = document.getElementById("Prato2").querySelector(".NameRequest").innerHTML;
    PratoPrice = document.getElementById("Prato2").querySelector(".RequestPrice").innerHTML;
    console.log(Prato);
    console.log(PratoPrice);
}
function Prato3(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "transparent"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "transparent"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "#32B72F"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "transparent"
    Prato = document.getElementById("Prato3").querySelector(".NameRequest").innerHTML;
    PratoPrice = document.getElementById("Prato3").querySelector(".RequestPrice").innerHTML;
    console.log(Prato);
    console.log(PratoPrice);
}
function Prato4(div) {
    const Prato1 = document.getElementById("Prato1").style.borderColor = "transparent"
    const Prato2 = document.getElementById("Prato2").style.borderColor = "transparent"
    const Prato3 = document.getElementById("Prato3").style.borderColor = "transparent"
    const Prato4 = document.getElementById("Prato4").style.borderColor = "#32B72F"
    Prato = document.getElementById("Prato4").querySelector(".NameRequest").innerHTML;
    PratoPrice = document.getElementById("Prato4").querySelector(".RequestPrice").innerHTML;
    console.log(Prato);
    console.log(PratoPrice);
}

// ===--- Funções para as Bebidas
function Bebida1(div) {
    const Bebida1 = document.getElementById("Bebida1").style.borderColor = "#32B72F"
    const Bebida2 = document.getElementById("Bebida2").style.borderColor = "transparent"
    const Bebida3 = document.getElementById("Bebida3").style.borderColor = "transparent"
    const Bebida4 = document.getElementById("Bebida4").style.borderColor = "transparent"
    Bebida = document.getElementById("Bebida1").querySelector(".NameRequest").innerHTML;
    BebidaPrice = document.getElementById("Bebida1").querySelector(".RequestPrice").innerHTML;
    console.log(Bebida);
    console.log(BebidaPrice);
}
function Bebida2(div) {
    const Bebida1 = document.getElementById("Bebida1").style.borderColor = "transparent"
    const Bebida2 = document.getElementById("Bebida2").style.borderColor = "#32B72F"
    const Bebida3 = document.getElementById("Bebida3").style.borderColor = "transparent"
    const Bebida4 = document.getElementById("Bebida4").style.borderColor = "transparent"
    Bebida = document.getElementById("Bebida2").querySelector(".NameRequest").innerHTML;
    BebidaPrice = document.getElementById("Bebida2").querySelector(".RequestPrice").innerHTML;
    console.log(Bebida);
    console.log(BebidaPrice);
}
function Bebida3(div) {
    const Bebida1 = document.getElementById("Bebida1").style.borderColor = "transparent"
    const Bebida2 = document.getElementById("Bebida2").style.borderColor = "transparent"
    const Bebida3 = document.getElementById("Bebida3").style.borderColor = "#32B72F"
    const Bebida4 = document.getElementById("Bebida4").style.borderColor = "transparent"
    Bebida = document.getElementById("Bebida3").querySelector(".NameRequest").innerHTML;
    BebidaPrice = document.getElementById("Bebida3").querySelector(".RequestPrice").innerHTML;
    console.log(Bebida);
    console.log(BebidaPrice);
}
function Bebida4(div) {
    const Bebida1 = document.getElementById("Bebida1").style.borderColor = "transparent"
    const Bebida2 = document.getElementById("Bebida2").style.borderColor = "transparent"
    const Bebida3 = document.getElementById("Bebida3").style.borderColor = "transparent"
    const Bebida4 = document.getElementById("Bebida4").style.borderColor = "#32B72F"
    Bebida = document.getElementById("Bebida4").querySelector(".NameRequest").innerHTML;
    BebidaPrice = document.getElementById("Bebida4").querySelector(".RequestPrice").innerHTML;
    console.log(Bebida);
    console.log(BebidaPrice);
}

// ===--- Funções para as Sobremesas
function Sobremesa1(div) {
    const Sobremesa1 = document.getElementById("Sobremesa1").style.borderColor = "#32B72F"
    const Sobremesa2 = document.getElementById("Sobremesa2").style.borderColor = "transparent"
    const Sobremesa3 = document.getElementById("Sobremesa3").style.borderColor = "transparent"
    const Sobremesa4 = document.getElementById("Sobremesa4").style.borderColor = "transparent"
    Sobremesa = document.getElementById("Sobremesa1").querySelector(".NameRequest").innerHTML;
    SobremesaPrice = document.getElementById("Sobremesa1").querySelector(".RequestPrice").innerHTML;
    console.log(Sobremesa);
    console.log(SobremesaPrice);
}
function Sobremesa2(div) {
    const Sobremesa1 = document.getElementById("Sobremesa1").style.borderColor = "transparent"
    const Sobremesa2 = document.getElementById("Sobremesa2").style.borderColor = "#32B72F"
    const Sobremesa3 = document.getElementById("Sobremesa3").style.borderColor = "transparent"
    const Sobremesa4 = document.getElementById("Sobremesa4").style.borderColor = "transparent"
    Sobremesa = document.getElementById("Sobremesa2").querySelector(".NameRequest").innerHTML;
    SobremesaPrice = document.getElementById("Sobremesa2").querySelector(".RequestPrice").innerHTML;
    console.log(Sobremesa);
    console.log(SobremesaPrice);
}
function Sobremesa3(div) {
    const Sobremesa1 = document.getElementById("Sobremesa1").style.borderColor = "transparent"
    const Sobremesa2 = document.getElementById("Sobremesa2").style.borderColor = "transparent"
    const Sobremesa3 = document.getElementById("Sobremesa3").style.borderColor = "#32B72F"
    const Sobremesa4 = document.getElementById("Sobremesa4").style.borderColor = "transparent"
    Sobremesa = document.getElementById("Sobremesa3").querySelector(".NameRequest").innerHTML;
    SobremesaPrice = document.getElementById("Sobremesa3").querySelector(".RequestPrice").innerHTML;
    console.log(Sobremesa);
    console.log(SobremesaPrice);
}
function Sobremesa4(div) {
    const Sobremesa1 = document.getElementById("Sobremesa1").style.borderColor = "transparent"
    const Sobremesa2 = document.getElementById("Sobremesa2").style.borderColor = "transparent"
    const Sobremesa3 = document.getElementById("Sobremesa3").style.borderColor = "transparent"
    const Sobremesa4 = document.getElementById("Sobremesa4").style.borderColor = "#32B72F"
    Sobremesa = document.getElementById("Sobremesa4").querySelector(".NameRequest").innerHTML;
    SobremesaPrice = document.getElementById("Sobremesa4").querySelector(".RequestPrice").innerHTML;
    console.log(Sobremesa);
    console.log(SobremesaPrice);
}

// ===--- Função para ativar o botão verde
function VerifyRequest(button){
    const Verify = document.getElementById("ResponseDisable");
    const Bar = document.getElementById("DownBar");
    if(this.Prato !== undefined){
        if(this.Bebida !== undefined){
            if(this.Sobremesa !== undefined){
                //Verify.style.backgroundColor = "#32B72F";
                //Verify.style.display = "none"
                Verify.parentNode.removeChild(Verify);
                Bar.innerHTML = '<button id="Response">Fechar pedido</button>';
                //Verify.innerText = "Fechar Pedido";
            }
        }   
    }
}