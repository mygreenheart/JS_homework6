"use strict";

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

  secondDiv.className = "grid ";
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

  btnChangeIngridient.addEventListener("click", createModalWindow);
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
      pFillter.innerText = "";
      filterArr.push(e);
    }
    if (filterArr.length == 0) {
      pFillter.innerText = " Invalid parametrs";
    }
  });

  drawGridPizza(filterArr);
}

function sortByName1() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections.slice().sort((a, b) => {
    a.name.toLowerCase();
    b.name.toLowerCase();
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
  });
  drawListPizza(sorted);
}

function sortByName2() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections.slice().sort((a, b) => {
    a.name.toLowerCase();
    b.name.toLowerCase();
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;

    return 0;
  });
  drawListPizza(sorted);
}

function sortByPriceUp() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections.slice().sort((a, b) => {
    return b.price - a.price;
  });
  drawListPizza(sorted);
}

function sortByPriceDown() {
  let sortedt = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sortedt = pizzaCollections.slice().sort((a, b) => {
    return a.price - b.price;
  });
  drawListPizza(sortedt);
}

//Create modal window

function createModalWindow() {
  let modal = document.createElement("div"),
    modalContent = document.createElement("div"),
    span = document.createElement("span"),
    ul = document.createElement("ul"),
    pTitle = document.createElement("p"),
    select = document.createElement("select"),
    addDiv = document.createElement("div"),
    btnAdd = document.createElement("input"),
    target = event.currentTarget;

  modal.className = "modal";
  span.className = "close";
  span.textContent = "X";
  modalContent.className = "modal-content";
  modal.style.display = "block";
  btnAdd.type = "button";
  btnAdd.value = "Add";
  addDiv.className = "addDiv";

  fillSelectIngridient(select);
  document.body.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(span);
  modalContent.appendChild(pTitle);
  modalContent.appendChild(ul);
  modalContent.appendChild(ul);
  modalContent.appendChild(addDiv);
  addDiv.appendChild(btnAdd);
  addDiv.appendChild(select);

  for (let i = 0; i < pizzaCollections.length; i++) {
    let btnClick = document.getElementById(i);
    if (target.id == btnClick.id) {
      for (const e of pizzaCollections[i].composition) {
        let li = document.createElement("li"),
          a = document.createElement("a");

        pTitle.innerText = pizzaCollections[i].name;
        a.innerText = e[0];
        a.href = "#";
        li.appendChild(a);
        ul.appendChild(li);

        a.onclick = function() {
          if (event.target.textContent == e[0]) {
            if (a.style.textDecoration == "") {
              a.style.textDecoration = "line-through";
              pizzaCollections[i].deleteIngridient(e);
            } else {
              a.style.textDecoration = "";
              pizzaCollections[i].addDeletedIngridient();
            }
          }
        };
        btnAdd.onclick = function() {
          for (const ingridient of ingridientsCollection) {
            for (let i = 0; i < select.childNodes.length; i++) {
              if (
                select.childNodes[i].selected &&
                select.childNodes[i].value == ingridient.iName
              ) {
                  console.log(  pizzaCollections[i]);
                pizzaCollections[i].addComposition(ingridient);
              }
            }
          }
        };
      }
    }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      drawGridPizza(pizzaCollections);
    }
  };
  span.onclick = function() {
    modal.style.display = "none";
    drawGridPizza(pizzaCollections);
  };
}

function fillSelectIngridient(select) {
  for (let i = 0; i < ingridientsCollection.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", ingridientsCollection[i].iName);
    option.innerText = ingridientsCollection[i].iName;
    select.appendChild(option);
  }
}
