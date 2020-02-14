"use strict"

let pizzaCollections = [],
    ingridientsCollection = [];


function addPizzaToCollection(...pizza) {
    pizzaCollections.push(...pizza);
}

function addIngridientsToCollection(...ingridient) {
    ingridientsCollection.push(...ingridient);
}

function createDiv(img, name, composition, calories, price, count) {
    let secondDiv = document.createElement("div"),
        pImg = document.createElement("img"),
        pName = document.createElement("p"),
        pComposition = document.createElement("p"),
        pCalories = document.createElement("p"),
        pPrice = document.createElement("p"),
        btnChangeIngridient = document.createElement("input");


    secondDiv.className = "grid "
    pImg.src = img;
    pName.innerText = "Name: " + name;
    pComposition.innerText = "Composition: " + composition;
    pCalories.innerText = "Calories: " + calories + " cal";
    pPrice.innerText = "Price: " + price + " $";
    btnChangeIngridient.id = count;

    btnChangeIngridient.type = "button";
    btnChangeIngridient.value = "Change Ingridient";


    gridDiv.appendChild(secondDiv);
    secondDiv.appendChild(pImg);
    secondDiv.appendChild(pName);
    secondDiv.appendChild(pComposition);
    secondDiv.appendChild(pCalories);
    secondDiv.appendChild(pPrice);
    secondDiv.appendChild(btnChangeIngridient);

    btnChangeIngridient.addEventListener("click", createModalWindow)
}

function createList(img, name, price) {
    let secondDiv = document.createElement("div"),
        ulLogo = document.createElement("img"),
        ulList = document.createElement("ul"),
        liName = document.createElement("li"),
        liPrice = document.createElement("li");

    secondDiv.className = "list";
    ulLogo.src = img;
    liName.innerText = name;
    liPrice.innerText = price + " $";

    listDiv.appendChild(secondDiv);
    secondDiv.appendChild(ulLogo);
    secondDiv.appendChild(ulList);
    ulList.appendChild(liName);
    ulList.appendChild(liPrice);
}

function drawGridPizza(arr) {
    listDiv.innerHTML = "";
    gridDiv.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        let img = arr[i].photo,
            name = arr[i].name,
            composition = arr[i].showComposition(),
            calories = arr[i].countCalories(),
            price = arr[i].countPrice();
        createDiv(img, name, composition, calories, price, i);
    }
}

function drawListPizza(arr) {
    gridDiv.innerHTML = "";
    listDiv.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        let name = arr[i].name,
            img = arr[i].photo,
            price = arr[i].countCalories();
        createList(img, name, price);
    }

}

function filterByIngredient(name) {
    let filterArr = [];
    gridDiv.innerHTML = "";
    listDiv.innerHTML = "";
    name = textFillter.value;


    pizzaCollections.map(e => {
        if (e.composition.has(name)) {
            pFillter.innerText = ""
            filterArr.push(e);
        }
        if (filterArr.length == 0) {
            pFillter.innerText = " Invalid parametrs"
        }
    })

    drawGridPizza(filterArr);
}

function sortByName1() {
    let sorted = [];
    gridDiv.innerHTML = "";
    listDiv.innerHTML = "";
    sorted = pizzaCollections.slice().sort((a, b) => {
        a.name.toLowerCase();
        b.name.toLowerCase();
        if (a.name < b.name)
            return -1
        if (a.name > b.name)
            return 1

        return 0
    })
    drawListPizza(sorted);
}

function sortByName2() {
    let sorted = [];
    gridDiv.innerHTML = "";
    listDiv.innerHTML = "";
    sorted = pizzaCollections.slice().sort((a, b) => {
        a.name.toLowerCase();
        b.name.toLowerCase();
        if (a.name > b.name)
            return -1
        if (a.name < b.name)
            return 1

        return 0
    })
    drawListPizza(sorted);
}

function sortByPriceUp() {
    let sorted = [];
    gridDiv.innerHTML = "";
    listDiv.innerHTML = "";
    sorted = pizzaCollections.slice().sort((a, b) => {
        return b.price - a.price;
    })
    drawListPizza(sorted);
}

function sortByPriceDown() {
    let sortedt = [];
    gridDiv.innerHTML = "";
    listDiv.innerHTML = "";
    sortedt = pizzaCollections.slice().sort((a, b) => {
        return a.price - b.price;
    })
    drawListPizza(sortedt);
}

//Create modal window

function createModalWindow() {
    let modal = document.createElement('div'),
        modalContent = document.createElement("div"),
        span = document.createElement("span"),
        ul = document.createElement("ul");

    modal.className = "modal";
    span.className = "close";
    span.value = "X"
    modalContent.className = "modal-content"
    modal.style.display = "block";


    let target = event.currentTarget;

    for (let i = 0; i < pizzaCollections.length; i++) {
        let btnClick = document.getElementById(i);
        if (target.id == btnClick.id) {
            for (const e of pizzaCollections[i].showComposition()) {
                let li = document.createElement('li'),
                    a = document.createElement('a');

                a.innerText = e;
                li.appendChild(a);
                ul.appendChild(li);
            }
        }
    }



    document.body.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(span);
    modalContent.appendChild(ul);






    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    span.onclick = function () {
        modal.style.display = "none";
    }

}


