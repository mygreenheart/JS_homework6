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
    nameDiv = document.createElement("div"),
    infoDiv = document.createElement("div"),
    imgDiv = document.createElement("div"),
    pImg = document.createElement("img"),
    pName = document.createElement("a"),
    pComposition = document.createElement("p"),
    pCalories = document.createElement("p"),
    pPrice = document.createElement("p"),
    btnChangeIngridient = document.createElement("input");

  secondDiv.className = "grid ";
  nameDiv.className = "nameDiv";
  imgDiv.className = "imgDiv card";
  infoDiv.className = "infoDiv card";
  pName.href = "#";
  pImg.src = img;
  pName.innerText = name;
  pComposition.innerText = "Composition: " + composition;
  pCalories.innerText = "Calories: " + calories + " cal";
  pPrice.innerText = "Price: " + price + " $";
  btnChangeIngridient.id = count;

  btnChangeIngridient.type = "button";
  btnChangeIngridient.value = "Change Ingridient";

  gridDiv.appendChild(secondDiv);
  secondDiv.appendChild(imgDiv);
  secondDiv.appendChild(infoDiv);
  imgDiv.appendChild(pImg);
  nameDiv.appendChild(pName);
  infoDiv.appendChild(nameDiv);
  infoDiv.appendChild(pComposition);
  infoDiv.appendChild(pCalories);
  infoDiv.appendChild(pPrice);
  infoDiv.appendChild(btnChangeIngridient);

  pName.addEventListener("click", () => {
    if (event.target == pName) {
      pImg.style.height = "28.9vh";
      pImg.style.width = "50vh";
      imgDiv.style.opacity = "1";
    }
  })

  pImg.addEventListener("click", () => {
    if (event.target == pImg) {
      imgDiv.style.opacity = "0";
      setTimeout(()=>{
        pImg.style.height = "4vh";
        pImg.style.width = "8vh";
      },1500)

    }
  })



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
      price = arr[i].countPrice();
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
    return a.countPrice() > b.countPrice() ? -1 : 1;
  });
  drawListPizza(sorted);
}

function sortByPriceDown() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections.slice().sort((a, b) => {
    return a.countPrice() > b.countPrice() ? 1 : -1;
  });
  drawListPizza(sorted);
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
    target = event.currentTarget,
    error = document.createElement("p");

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
      for (let e of pizzaCollections[i].composition) {
        let li = document.createElement("li"),
          a = document.createElement("a");

        pTitle.innerText = pizzaCollections[i].name;
        a.innerText = e[0];
        a.href = "#";
        li.appendChild(a);
        ul.appendChild(li);
        a.onclick = function () {
          if (event.target.textContent == a.textContent) {
            if (a.textContent == "pastry") {
              error.textContent = "Cannot delete pastry";
              modalContent.appendChild(error);
              error.style.color = "red";
              error.style.fontSize = "3vh";
              throw error;
            }
            if (a.style.textDecoration == "") {
              error.innerHTML = "";
              a.style.textDecoration = "line-through";
              pizzaCollections[i].deleteIngridient(e);
            } else {
              a.style.textDecoration = "";
              pizzaCollections[i].addDeletedIngridient(e);
            }
          }
        };
        btnAdd.onclick = function () {
          for (let ingridient of ingridientsCollection) {
            for (let option of select.childNodes) {
              if (option.selected && option.value == ingridient.iName) {
                pizzaCollections[i].addComposition(ingridient);
                ul.textContent = "";
                for (let e of pizzaCollections[i].composition) {
                  let li = document.createElement("li"),
                    a = document.createElement("a");
                  pTitle.innerText = pizzaCollections[i].name;
                  a.innerText = e[0];
                  a.href = "#";
                  li.appendChild(a);
                  ul.appendChild(li);
                }
              }
            }
          }
        };
      }
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        drawGridPizza(pizzaCollections);
      }
    };
    span.onclick = function () {
      modal.style.display = "none";
      drawGridPizza(pizzaCollections);
    };
  }
}

function fillSelectIngridient(select) {
  for (let i = 0; i < ingridientsCollection.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", ingridientsCollection[i].iName);
    option.innerText = ingridientsCollection[i].iName;
    select.appendChild(option);
  }
}

function addNewPizza() {

  let modal = document.createElement("div"),
    modalContent = document.createElement("div"),
    nameDiv = document.createElement("div"),
    compositionDiv = document.createElement("div"),
    span = document.createElement("span"),
    ul = document.createElement("ul"),
    nameText = document.createElement("input"),
    nameLabel = document.createElement("label"),
    pTitle = document.createElement("p"),
    select = document.createElement("select"),
    btnAddComposition = document.createElement("input"),
    btnAddPizza = document.createElement("input"),
    target = event.currentTarget,
    error = document.createElement("p");

  fillSelectIngridient(select);
  modal.className = "modal";
  span.className = "close";
  span.textContent = "X";
  modalContent.className = "modal-content";
  modal.style.display = "block";
  btnAddComposition.type = "button";
  btnAddComposition.value = "Add Conposition";
  btnAddPizza.type = "button";
  btnAddPizza.value = "Add Pizza";
  nameText.type = "text";
  nameLabel.innerText = "Name";
  nameDiv.className = "nameDiv";
  compositionDiv.className = "compositionDiv";
  pTitle.innerText = "Create New Pizza"

  document.body.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(span);
  modalContent.appendChild(pTitle);
  modalContent.appendChild(nameDiv);
  nameDiv.appendChild(nameText);
  nameDiv.appendChild(nameLabel);
  modalContent.appendChild(compositionDiv);
  compositionDiv.appendChild(select);
  compositionDiv.appendChild(ul);
  compositionDiv.appendChild(btnAddComposition);
  modalContent.appendChild(btnAddPizza);
  modalContent.appendChild(error);

  let newPizza = new Pizza("./img/pizza16.jpg", "");
  btnAddPizza.onclick = function () {
    if (!(nameText.value == "")) {
      newPizza.setName(nameText.value);
      newPizza.addComposition(pastry);
      addPizzaToCollection(newPizza);
      modal.style.display = "none";
      drawGridPizza(pizzaCollections);
    } else {
      error.textContent = "You must put name";
      throw error;
    }

  };

  btnAddComposition.onclick = function () {
    for (let ingridient of ingridientsCollection) {
      for (let option of select.childNodes) {
        if (option.selected && option.value == ingridient.iName) {
          ul.textContent = "";
          let li = document.createElement("li"),
            a = document.createElement("a");
          newPizza.addComposition(ingridient)
          a.innerText = newPizza.showComposition();
          a.href = "#";
          li.appendChild(a);
          ul.appendChild(li);
        }
      }
    }
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      drawGridPizza(pizzaCollections);
    }
  };
  span.onclick = function () {
    modal.style.display = "none";
    drawGridPizza(pizzaCollections);
  };

}