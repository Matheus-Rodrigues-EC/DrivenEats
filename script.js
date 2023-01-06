class Meal{
    constructor(Plate, Drink, Dessert, PlatePrice, DrinkPrice, DessertPrice, VPlate, VDrink, VDessert){
        this.Plate = Plate;
        this.Drink = Drink;
        this.Dessert = Dessert;
        PlatePrice = PlatePrice;
        DrinkPrice = DrinkPrice;
        DessertPrice = DessertPrice;
        VPlate = false;
        VDrink = false;
        VDessert = false;
    }
}

// ===--- Funções para os pratos
let Plates = document.querySelectorAll(".Plate");
console.log(Plates.length);
Plates.forEach((Plate, Selection) => {
    Selection = document.querySelectorAll(".Plate",".Select");
    Plate.addEventListener('click', (event) => {
        Selection.forEach((UnSelect) => {
            if(UnSelect !== undefined){
                UnSelect.classList.remove('Select');
            }
        })
        Plate.classList.add('Select');
        this.Plate = Plate.querySelector(".NameRequest").innerHTML;
        this.PlatePrice = Plate.querySelector(".value").innerHTML;
        console.log(this.Plate);
        console.log(this.PlatePrice);
        this.VPlate = true;
    })
});

// ===--- Funções para as Bebidas
let Drinks = document.querySelectorAll(".Drink");

Drinks.forEach((Drink, Selection) => {
    Selection = document.querySelectorAll(".Drink",".Select");
    Drink.addEventListener('click', (event) => {
        Selection.forEach((UnSelect) => {
            if(UnSelect !== undefined){
                UnSelect.classList.remove('Select');
            }
        })
        Drink.classList.add('Select');
        this.Drink = Drink.querySelector(".NameRequest").innerHTML;
        DrinkPrice = Drink.querySelector(".value").innerHTML;
        console.log(this.Drink);
        console.log(this.DrinkPrice);
        this.VDrink = true;
    })
})

// ===--- Funções para as Sobremesas
let Desserts = document.querySelectorAll(".Dessert");

Desserts.forEach((Dessert) => {
    Selection = document.querySelectorAll(".Dessert",".Select");
    Dessert.addEventListener('click', (event) => {
        Selection.forEach((UnSelect) => {
            if(UnSelect !== undefined){
                UnSelect.classList.remove('Select');
            }
        })
        Dessert.classList.add('Select');
        this.Dessert = Dessert.querySelector(".NameRequest").innerHTML;
        DessertPrice = Dessert.querySelector(".value").innerHTML;
        console.log(this.Dessert);
        console.log(this.DessertPrice);
        this.VDessert = true;
    })
})

// ===--- Função para ativar o botão verde
function VerifyRequest(button){
    const Verify = document.querySelector(".DoRequest");
    const Bar = document.getElementById("DownBar");
    if(this.Plate !== undefined){
        if(this.Drink !== undefined){
            if(this.Dessert !== undefined){
                //Verify.style.backgroundColor = "#32B72F";
                //Verify.style.display = "none"
                Verify.parentNode.removeChild(Verify);
                Bar.innerHTML = '<button class="ResponseEnable">Fechar pedido</button>';
                //Verify.innerText = "Fechar Pedido";
            }
        }   
    }
}