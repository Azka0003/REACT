// logical AND and OR

function getName(name) {
  return name
}

let a = true;
let b = true;

console.log("AND behavior");
console.log(a && b);
console.log(a && getName("Azka"));

console.log("OR behavior");
console.log(a || b);
console.log(a || getName("Azka"));
a = false
console.log(a || b);
console.log(a || getName("Azka"));

console.log("AND behavior");
console.log(a && b);
console.log(a && getName("Azka"));

//Template literals
let name1 = "john"
let name2 = "Doe"

console.log(name1 + " " + name2 + "," + `${name1} ${name2}`);
console.log(name1 + " " + name2, `${name1} ${name2}`);


//Ternary operator
let showRecipieOne = false;

function getRecipeOneName(recipeName) {
  return recipeName
}

function getRecipeTwoName(recipeName) {
  return recipeName
}

if (showRecipieOne) {
  console.log(getRecipeOneName("pizza"));
} else {
  console.log(getRecipeOneName("Coke"));
}

showRecipieOne ? console.log(getRecipeOneName("pizza")) : console.log(getRecipeOneName("Coke"));


//ShortHand
const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id: id,
  productName: productName,
  rating: rating,
};

// as key name nd var name is same:ShortHand
const product1 = {
  id,
  productName,
  rating,
};

console.log(product);
console.log(product1);

//Destructuring
const product2 = {
  description: "Product 2 description",
  id,
  productName,
  rating,
};

// const getProductTwoDescription = product2.description;

// console.log(getProductTwoDescription);

const { description } = product2;

console.log(description);

const array = [1, 2, 3, 4];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);

const [
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement,
] = array;

console.log(
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement
);


//default parameters, spread and rest operators

function mulOfTwoNumbers(num1 = 1, num2 = 2) {
  console.log(num1, num2);
  return num1 * num2;
}

console.log(mulOfTwoNumbers(undefined, 10));
console.log(mulOfTwoNumbers(10));

//spread 
const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

console.log([...array2]);//spread kr dega  that mean 2 3 4 if u want in array then use [] aroung ...a1
console.log([...array2, ...array3]);//spread combine then in array
console.log([...array2, 90, ...array3]);
console.log([999, ...array2, 90, ...array3]);
console.log([999, ...array2, 90, ...array3, 10000]);

//rest

function getInfo(a, b, ...c) {//c return as array containing all rest ,always at end not in starting
  console.log(a, b, c);

  return "Sangam Mukherjee";
}

console.log(getInfo(1, 2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2));


//map, filter, find, some, every, includes, indexOf, findIndex

const personsArray = [
  {
    name: "Person 01",
    age: 45,
    country: "USA",
  },
  {
    name: "Person 1",
    age: 30,
    country: "USA",
  },
  {
    name: "Person 2",
    age: 40,
    country: "RUSSIA",
  },
  {
    name: "Person 3",
    age: 50,
    country: "INDIA",
  },
];

//return array's one val and index
let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return `${singlePerson.name} age is ${singlePerson.age}`;
});

console.log(getAllNames);


let getPersonFromUSA = personsArray.find((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getPersonFromUSA);

let getAllPersonsFromUSA = personsArray.filter((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getAllPersonsFromUSA);

let checkSomeArrayMethodWithExample = personsArray.some((singlePerson) => {
  return singlePerson.age > 40;
});

console.log(checkSomeArrayMethodWithExample);

let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) => {
  return singlePerson.age > 25;
});

console.log(checkEveryArrayMethodWithExample);


const fruitsArray = ["apple", "banana", "orange"];

console.log(fruitsArray.includes("sangam"), fruitsArray.indexOf("orange"));

let getIndexOfPersonWhoISFromRussia = personsArray.findIndex((singlePerson) => {
  return singlePerson.country === "JAPAN";
});

console.log(getIndexOfPersonWhoISFromRussia);


let getListOfproductsElement = document.querySelector('.list-of-products');


function renderProducts(getProducts) {
  getListOfproductsElement.innerHTML = getProducts
    .map((singleProductItem) => `<p>${singleProductItem.title}</p>`)
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/products', {
      method: 'GET'
    })
    const result = await apiResponse.json();
    console.log(result);

  if (result?.products?.length > 0) renderProducts(result?.products);

  } catch (e) {
    console.log(e);
  }
}

fetchListOfProducts()

// 1️⃣ API links (like /products) come from the API’s official documentation, not from guessing.
// 2️⃣ Always open the API URL in the browser first to check what data it returns.
// 3️⃣ Endpoints like /test only check server status — they do not return real data.
// 4️⃣ Use endpoints that return actual JSON arrays (like /products) for rendering UI.
// 5️⃣ fetch() gets the data, then you use JavaScript to show it in the DOM.
// 6️⃣ React later automates this same process using state and components 🚀