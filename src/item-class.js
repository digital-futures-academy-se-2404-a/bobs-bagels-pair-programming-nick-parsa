class Item {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName = () => this.#name;
}

export default Item;
