"use strict";
//Create HTML
let gridDiv = document.createElement("div"),
  listDiv = document.createElement("div"),
  showDivHeader = document.createElement("div"),
  searchDivHeader = document.createElement("div"),
  sortDivHeader = document.createElement("div"),
  btnGrid = document.createElement("input"),
  btnList = document.createElement("input"),
  btnFillter = document.createElement("input"),
  pFillter = document.createElement("p"),
  btnSortByName1 = document.createElement("input"),
  btnSortByName2 = document.createElement("input"),
  btnSortByPrice1 = document.createElement("input"),
  btnSortByPrice2 = document.createElement("input"),
  textFillter = document.createElement("input"),
  btnAddPizza = document.createElement("input"),
  cartDiv = document.createElement("div"),
  cartA = document.createElement("a"),
  cartDivInside = document.createElement("div"),
  cartDivTotal = document.createElement("div"),
  cartBtnTotal = document.createElement("a"),
  divSort = document.createElement("div"),
  header = document.createElement("header");

document.body.appendChild(header);
document.body.appendChild(gridDiv);
document.body.appendChild(listDiv);
document.body.appendChild(divSort);


header.appendChild(showDivHeader);
header.appendChild(searchDivHeader);
header.appendChild(sortDivHeader);

showDivHeader.appendChild(btnGrid);
showDivHeader.appendChild(btnList);
searchDivHeader.appendChild(btnFillter);
searchDivHeader.appendChild(textFillter);
searchDivHeader.appendChild(btnAddPizza);

cartDivInside.appendChild(cartDivTotal);
cartDivTotal.appendChild(cartBtnTotal);
searchDivHeader.appendChild(pFillter);
sortDivHeader.appendChild(btnAddPizza);
sortDivHeader.appendChild(cartDiv);
cartDiv.appendChild(cartA)
cartDiv.appendChild(cartDivInside);


divSort.appendChild(btnSortByPrice1);
divSort.appendChild(btnSortByPrice2);
divSort.appendChild(btnSortByName1);
divSort.appendChild(btnSortByName2);

searchDivHeader.className = "searchDivHeader";
divSort.className = "divSort";
cartDivTotal.className = "cartTotal";
cartBtnTotal.className = "cartButton"
sortDivHeader.className = "sortDiv";
gridDiv.className = "gridDiv";
listDiv.className = "listDiv";
header.className = "header";
cartDiv.className = "cartDiv";
cartDivInside.className = "cartDivInside";
cartA.className = "cartA";
btnGrid.type = "button";
btnGrid.value = "Show grid";
btnAddPizza.type = "button";
btnAddPizza.value = "Add Pizza";
cartA.innerText = "(" + cart.length + ")";
cartA.href = "#"
btnList.type = "button";
btnList.value = "Show list";
btnFillter.type = "button";
btnFillter.value = "Fillter";
btnSortByName1.type = "button";
btnSortByName1.value = "Sort by Name ↑";
btnSortByName2.type = "button";
btnSortByName2.value = "Sort by Name ↓";
btnSortByPrice1.type = "button";
btnSortByPrice1.value = "Sort by Price ↑";
btnSortByPrice2.type = "button";
btnSortByPrice2.value = "Sort by Price ↓";
textFillter.type = "text";

//Create class Elements
let pizza1 = new Pizza("./img/pizza1.jpg", "Peperoni"),
  pizza2 = new Pizza("./img/pizza2.jpg", "Margherita"),
  pizza3 = new Pizza("./img/pizza3.jpg", "Marinara"),
  pizza4 = new Pizza("./img/pizza4.jpg", "Quattro Stagioni"),
  pizza5 = new Pizza("./img/pizza5.jpg", "Quattro Formaggi"),
  pizza6 = new Pizza("./img/pizza6.jpg", "Crudo"),
  pizza7 = new Pizza("./img/pizza7.jpg", "Napoletana"),
  pizza8 = new Pizza("./img/pizza8.jpg", "Pugliese"),
  pizza9 = new Pizza("./img/pizza9.jpg", "Montanara"),
  pizza10 = new Pizza("./img/pizza10.jpg", "Emiliana"),
  pizza11 = new Pizza("./img/pizza11.jpg", "Romana"),
  pizza12 = new Pizza("./img/pizza12.jpg", "Fattoria"),
  pizza13 = new Pizza("./img/pizza13.jpg", "Schiacciata"),
  pizza14 = new Pizza("./img/pizza14.jpg", "Prosciutto"),
  pizza15 = new Pizza("./img/pizza15.jpg", "Prosciutto"),
  pizza16 = new Pizza("./img/pizza16.jpg", "Americana");

let pastry = new Ingridient("pastry", 10, 2),
  bekon = new Ingridient("bekon", 50, 1.5),
  chease = new Ingridient("chease", 20, 1),
  tomato = new Ingridient("tomato", 5, 0.3),
  ketchup = new Ingridient("ketchup", 10, 0.5),
  pineapple = new Ingridient("pineapple", 15, 2.5),
  olives = new Ingridient("olives", 15, 1),
  mozzarella = new Ingridient("mozzarella", 15, 3),
  sausages = new Ingridient("sausages", 100, 3.5),
  garlic = new Ingridient("garlic", 2, 0.3),
  otzhika = new Ingridient("otzhika", 10, 0.5),
  pelmeni = new Ingridient("pelmeni", 100, 10000);

addPizzaToCollection(
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5,
  pizza6,
  pizza7,
  pizza8,
  pizza9,
  pizza10,
  pizza11,
  pizza12,
  pizza13,
  pizza14,
  pizza15,
  pizza16
);
addIngridientsToCollection(
  bekon,
  chease,
  ketchup,
  tomato,
  pineapple,
  olives,
  mozzarella,
  sausages,
  garlic,
  otzhika,
  pelmeni
);
pizza1.addComposition(pastry);
pizza1.addComposition(bekon);
pizza1.addComposition(chease);
pizza2.addComposition(pastry);
pizza2.addComposition(ketchup);
pizza3.addComposition(pastry);
pizza4.addComposition(pastry);
pizza5.addComposition(pastry);
pizza6.addComposition(pastry);
pizza7.addComposition(pastry);
pizza8.addComposition(pastry);
pizza9.addComposition(pastry);
pizza10.addComposition(pastry);
pizza11.addComposition(pastry);
pizza12.addComposition(pastry);
pizza13.addComposition(pastry);
pizza14.addComposition(pastry);
pizza15.addComposition(pastry);
pizza16.addComposition(pastry);

//Call all functions

btnGrid.addEventListener("click", () => {
  drawGridPizza(pizzaCollections);
});

btnList.addEventListener("click", () => {
  drawListPizza(pizzaCollections);
});
btnAddPizza.addEventListener("click", addNewPizza)
btnFillter.addEventListener("click", filterByIngredient);
btnSortByName1.addEventListener("click", sortByName1);
btnSortByName2.addEventListener("click", sortByName2);
btnSortByPrice1.addEventListener("click", sortByPriceUp);
btnSortByPrice2.addEventListener("click", sortByPriceDown);

$(".cartDiv").click(function () {
  $(".cartDivInside").slideToggle("slow");
});


addPizzaFromLocalStorage()