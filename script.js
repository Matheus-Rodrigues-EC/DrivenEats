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
            if(UnSelect !== undefined){
                UnSelect.classList.remove('Select');
            }
        })
        Plate.classList.add('Select');
        this.Plate = Plate.querySelector(".NameRequest").innerHTML;
        this.PlatePrice = Plate.querySelector(".value").innerHTML;
        VPlate = true;
        console.log(this.Plate);
        console.log(this.PlatePrice);

        if(VPlate !== false){
            if(VDrink !== false){
                if(VDessert !== false){
                    Verify.parentNode.removeChild(Verify);
                    Bar.innerHTML = '<button class="ResponseEnable">Fechar pedido</button>';
                }
            }
        }
    })
})
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
        this.DrinkPrice = Drink.querySelector(".value").innerHTML;
        VDrink = true;
        console.log(this.Drink);
        console.log(this.DrinkPrice);
        
        if(VPlate !== false){
            if(VDrink !== false){
                if(VDessert !== false){
                    Verify.parentNode.removeChild(Verify);
                    Bar.innerHTML = '<button class="ResponseEnable">Fechar pedido</button>';
                }
            }
        }
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
        this.DessertPrice = Dessert.querySelector(".value").innerHTML;
        VDessert = true;
        console.log(this.Dessert);
        console.log(this.DessertPrice);
        
        if(VPlate !== false){
            if(VDrink !== false){
                if(VDessert !== false){
                    Verify.parentNode.removeChild(Verify);
                    Bar.innerHTML = '<button class="ResponseEnable">Fechar pedido</button>';
                }
            }
        }
    })

})

// ===--- Função para ativar o botão verde

/*function VerifyRequest(){
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

*/