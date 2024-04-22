import Item from "./item-class.js";

class Basket {
  // PRIVATE PROPERTIES
  #basketItems = [];

  // functions
  addItem = (item) => {
    if (item instanceof Item) {
      this.#basketItems.push(item);
    }
  };

  getBasketItems = () => {
    return this.#basketItems;
  };
}

export default Basket;
