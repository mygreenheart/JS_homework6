"use strict";
var deletedElem;
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

  deleteIngridient(name) {
    deletedElem = name;
    this.composition.delete(name[0]);
  }
  addDeletedIngridient() {
    this.composition.set(deletedElem[0], deletedElem[1]);
  }
}

class Ingridient {
  constructor(iName, iCalories, iPrice) {
    this.iName = iName;
    this.iCalories = iCalories;
    this.iPrice = iPrice;
  }
}
