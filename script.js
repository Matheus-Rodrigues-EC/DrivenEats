    let VPlate = false;
    let VDrink = false;
    let VDessert = false;
    const Verify = document.querySelector('.DoRequest');
    const Bar = document.getElementById("DownBar");
    

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
        console.log(this.Plate);
        console.log(this.PlatePrice);
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
        console.log(this.Drink);
        console.log(this.DrinkPrice);
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
        console.log(this.Dessert);
        console.log(this.DessertPrice);
        VerifyRequest();
    })
})

// ===--- Função para ativar o botão verde

function VerifyRequest(){
    if(VPlate !== false){
        if(VDrink !== false){
            if(VDessert !== false){
                Verify.parentNode.removeChild(Verify);
                Bar.innerHTML = '<button class="ResponseEnable">Fechar pedido</button>';
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

