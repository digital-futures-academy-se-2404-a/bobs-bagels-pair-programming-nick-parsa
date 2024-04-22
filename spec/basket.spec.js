import { assertEquals } from "./test-framework.js";
// import basket from "../src/basket.js";
import Basket from "../src/basket-class.js";
import Item from "../src/item-class.js";
//import { addItem } from "../src/index.js";

//* Clear up function
const afterTest = () => {
  testItem = {};
  basket = null;
  expected = undefined;
  actual = undefined;
  result = undefined;
};

//! Test 1
// Arrange
let basket = new Basket();
let expected = basket.getBasketItems.length + 1;
let testItem = new Item("Banana");
let actual, result;

// Act
basket.addItem(testItem);
//console.log(basket);
actual = basket.getBasketItems().length;

// Assert

result = assertEquals(actual, expected);

// Report

console.log(`Test 1: ${result}`);
console.log(actual);
console.log(expected);

// Clear up function
afterTest();

// END OF TEST 1

//! Test 2
//checking if you can add to basket that already has an item

// Arrange
let testItem1 = new Item("Bagel");
let testItem2 = new Item("Apple");
basket = new Basket();
expected = basket.getBasketItems().length + 2;
//let t2Actual, t2Result;

// Act
basket.addItem(testItem1);
basket.addItem(testItem2);
console.log(testItem1.getName());

actual = basket.getBasketItems().length;

// Assert

result = assertEquals(actual, expected);

// Report

console.log(`Test 2: ${result}`);
console.log(actual);
console.log(expected);

// Clear up function
afterTest();

//! Test 3
//checking if item added to basket is the same item
