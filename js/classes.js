"use strict";
var deletedElem = [];
class Pizza {
  constructor(photo, name) {
    this.photo = photo;
    this.name = name;
    this.composition = new Map();
  }

  addComposition(ingridients) {
    this.composition.set(ingridients.iName, [
      ingridients.iCalories,
      ingridients.iPrice
    ]);
  }

  setName(name){
    this.name = name;
  }

  countPrice() {
    let price = 0;
    for (const entry of this.composition.values()) {
      price += entry[1];
    }
    return price;
  }

  countCalories() {
    let calories = 0;
    for (const entry of this.composition.values()) {
      calories += entry[0];
    }
    return calories;
  }

  showComposition() {
    let composition = [];
    for (let entry of this.composition.keys()) {
      composition.push(entry);
    }
    return composition;
  }

  deletePizza(){
    delete this
  }

  deleteIngridient(name) {
    deletedElem.push(name);
    this.composition.delete(name[0]);
  }

  addDeletedIngridient(name) {
    for (let i = 0; i < deletedElem.length; i++) {
      if ((name = deletedElem[i])) {
        this.composition.set(deletedElem[i][0], deletedElem[i][1]);
      }
    }
  }
}

class Ingridient {
  constructor(iName, iCalories, iPrice) {
    this.iName = iName;
    this.iCalories = iCalories;
    this.iPrice = iPrice;
  }
}
