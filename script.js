    let VPlate = false;
    let VDrink = false;
    let VDessert = false;
    const Verify = document.querySelector('.DoRequest');
    const Bar = document.querySelector(".DownBar");
    

// ===--- Funções para os pratos
let Plates = document.querySelectorAll(".Plate");
Plates.forEach((Plate, Selection) => {
    Selection = document.querySelectorAll(".Plate",".Select");
    Plate.addEventListener('click', (event) => {
        Selection.forEach((UnSelect) => {
            ActiveIcon(UnSelect);
        })
        ActiveSelection(Plate);
        this.Plate = Plate.querySelector(".NameRequest").innerHTML;
        this.PlatePrice = Plate.querySelector(".value").innerHTML;
        VPlate = true;
        VerifyRequest();
    })
})
// ===--- Funções para as Bebidas
let Drinks = document.querySelectorAll(".Drink");

Drinks.forEach((Drink, Selection) => {
    Selection = document.querySelectorAll(".Drink",".Select");
    Drink.addEventListener('click', (event) => {
        Selection.forEach((UnSelect) => {
            ActiveIcon(UnSelect);
        })
        ActiveSelection(Drink);
        this.Drink = Drink.querySelector(".NameRequest").innerHTML;
        this.DrinkPrice = Drink.querySelector(".value").innerHTML;
        VDrink = true;
        VerifyRequest();
    })
})

// ===--- Funções para as Sobremesas
let Desserts = document.querySelectorAll(".Dessert");

Desserts.forEach((Dessert) => {
    Selection = document.querySelectorAll(".Dessert",".Select");
    Dessert.addEventListener('click', (event) => {
        Selection.forEach((UnSelect) => {
            ActiveIcon(UnSelect);
        })
        ActiveSelection(Dessert);
        this.Dessert = Dessert.querySelector(".NameRequest").innerHTML;
        this.DessertPrice = Dessert.querySelector(".value").innerHTML;
        VDessert = true;
        VerifyRequest();
    })
})

// ===--- Função para ativar o botão verde

function VerifyRequest(){
    if(VPlate !== false){
        if(VDrink !== false){
            if(VDessert !== false){
                if(Verify.querySelector('.ResponseDisable')){
                    Verify.parentNode.removeChild(Verify);
                }
                Bar.innerHTML = '<button data-test="order-btn" class="ResponseEnable" onclick="ConfirmRequest(this)">Fechar pedido</button>';
            }
        }
    }
}

function ActiveIcon(UnSelect){
    if(UnSelect !== undefined){
        UnSelect.classList.remove('Select');
        UnSelect.querySelector('.hydrated').classList.remove('Icon');
        UnSelect.querySelector('.hydrated').classList.add('NoIcon');
    }
}

function ActiveSelection(selection){
    selection.classList.add('Select');
    selection.querySelector('.hydrated').classList.remove('NoIcon');
    selection.querySelector('.hydrated').classList.add('Icon');
}

function ConfirmRequest(){
    this.Total = (parseFloat(this.PlatePrice) + parseFloat(this.DrinkPrice) + parseFloat(this.DessertPrice));
    this.PlatePrice = parseFloat(this.PlatePrice);
    this.DrinkPrice = parseFloat(this.DrinkPrice);
    this.DessertPrice = parseFloat(this.DessertPrice);

    const ConfirmPlate = document.querySelector('.ConfirmPlate');
    const ConfirmDrink = document.querySelector('.ConfirmDrink');
    const ConfirmDessert = document.querySelector('.ConfirmDessert');
    const ConfirmTotal = document.querySelector('.ConfirmTotal');
    ConfirmPlate.innerHTML = `<span class="ConfirmMeal"> ${this.Plate}</span><span class="ConfirmMeal">${this.PlatePrice.toFixed(2)}</span>`
    ConfirmDrink.innerHTML = `<span class="ConfirmMeal"> ${this.Drink}</span></span><span class="ConfirmMeal">${this.DrinkPrice.toFixed(2)}</span>`
    ConfirmDessert.innerHTML = `<span class="ConfirmMeal"> ${this.Dessert}</span></span><span class="ConfirmMeal">${this.DessertPrice.toFixed(2)}</span>`
    ConfirmTotal.innerHTML = `<span class="ConfirmTotal">Total </span> <span class="ConfirmTotal">R$ ${this.Total.toFixed(2)}</span>`

    const ViewConfirmation = document.querySelector('.Confirmation');
    ViewConfirmation.classList.remove('none');
    ViewConfirmation.classList.add('View');
}

function ConfirmBtn(Btn){

    let Name = prompt("informe seu nome.");
    let Address = prompt("Informe seu Endereço.");

    let uri = `Olá, gostaria de fazer o pedido: \n\n`
            + `- Prato: ${this.Plate} \n`
            + `- Bebida: ${this.Drink} \n`
            + `- Sobremesa: ${this.Dessert} \n`
            + `Total ` + `R$ ${this.Total.toFixed(2)} \n\n` 
            + `Nome: ${Name} \n` 
            + `Endereço: ${Address}`;
    let encoded = encodeURIComponent(uri);
    Btn = window.open(`https://wa.me/+5585999999999/?text=${encoded}`, "janelaNova");
    Btn = window.location.reload();
}

function Cancel(Btn){
    Btn = document.querySelector('.Confirmation');
    Btn.classList.remove('View');
    Btn.classList.add('none');
}
