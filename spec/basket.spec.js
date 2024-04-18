import { assertEquals } from "./test-framework.js";
import basket from "../src/basket.js";
//import { addItem } from "../src/index.js";

//* Clear up function
const afterTest = () => {
    testItem = {};
    basket.basketItems = [];
    expected = undefined;
    actual = undefined;
    result = undefined;
}

//! Test 1
// Arrange
let expected = basket.basketItems.length + 1;
let testItem = {};
let actual, result;

// Act
basket.addItem(testItem)
actual = basket.basketItems.length;

// Assert

result = assertEquals(actual, expected);

// Report

console.log(`Test 1: ${result}`);
console.log(actual);
console.log(expected);

// Clear up function
afterTest()

// END OF TEST 1

//! Test 2
//checking if you can add to basket that already has an item

// Arrange
let testItem1 = {};
let testItem2 = {};
expected = basket.basketItems.length + 2;
//let t2Actual, t2Result;

// Act
basket.addItem(testItem1);
basket.addItem(testItem2);

actual = basket.basketItems.length


// Assert

result = assertEquals(actual, expected);

// Report

console.log(`Test 2: ${result}`);
console.log(actual);
console.log(expected);

// Clear up function
afterTest()


//! Test 3
//checking if item added to basket is the same item