//
import app from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  get
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// the reference to the database app
const database = getDatabase(app);
// reference to the products in our database
const productRef = ref(database, "/inventory");

// global variables
const productDivContainer = document.querySelector("#product-items-container");

// displaying our product data on the page emitted from firebase on the page
onValue(productRef, (data) => {
  // use onValue method to listen for changes, grabbing the data and getting a snapshot of the data
  const productData = data.val();

  for (let key in productData) {
    console.log(productData[key]);
    //creating the html to append on the page
    /* <div id = plant1>
      <img src= url alt ='' />
      <button class = "add-to-cart-""> <img src= url alt ='' />
      </button>
      <p></p>
      <p class ="prices"></p>
    </div>
    */
    // create variables to store some elements
    const productImgUrl = productData[key].image;
    const productImgAlt = productData[key].alt;
    const buttonImgUrl = productData[key].icon;
    const buttonImgAlt = productData[key].iconAlt;
    const productName = productData[key].name;
    const productPrice = productData[key].price;

    // create new html elements
    const divItem = document.createElement("div");
    divItem.id = key;
    const plantImg = document.createElement("img");
    plantImg.src = productImgUrl;
    plantImg.alt = productImgAlt;

    const buttonItem = document.createElement("button");
    buttonItem.className = "add-to-cart-";

    const buttonImg = document.createElement("img");
    buttonImg.className = "shopping-cart-button-img";
    buttonImg.src = buttonImgUrl;
    buttonImg.alt = buttonImgAlt;

    const paraTitleItem = document.createElement("p");
    paraTitleItem.innerHTML = productName;
    const paraSubTitleItem = document.createElement("p");
    paraSubTitleItem.className = "prices";
    paraSubTitleItem.innerHTML = productPrice;
    //appending the plant image, paragraphs and add to cart button to oue divItem
    divItem.append(plantImg, buttonItem, paraTitleItem, paraSubTitleItem);
    buttonItem.append(buttonImg);
    //appending our div item to the div item with an id of product-items-container
    document.querySelector("#product-items-container").append(divItem);
  }
});

// code for adding items to the cart
// event listener for the div container containing the products which contains the buttons (* global variable used here)
productDivContainer.addEventListener("click", (event) => {
  if (event.target.className === "shopping-cart-button-img");
  {

    //select the value of the cart count 
      get(cartCountRef).then((snapshot) => {
      console.log(snapshot.val());
    })
    //select the id of each item 
    //addToCart(event.target.parentElement.parentElement.id);
  }

});

// this function handles adding items to our cart section it will be called when the user clicks on the add to cart button
// on click, grab the info from the item, create a new object and push that to a location in firebase and increase item count in innerHTML
const addToCart = (selectedProduct) => {
  console.log(selectedProduct);
  //create a reference to the specific product in the database
};

//create a ref to the cartCount in the database

const cartCountRef = ref(database, "/cartCount");


// // Select the form elemet on the page and allow the browser to listen for an event (submit) then perform the following activities
// // Error Handling: Make sure the user has filled in all the fields before they are allowed to submit
// // If they click submit without filling all the fiels show an error message
// //Prevent the forms defualt of refreshing when the submit button is clicked/submitted
// // Save the inputs as variabes (inputs being what they write in the field)
// //** When the user submits, output a message on the form that confirms their submission and the button should change and allow them to submit another set of information "post again"

// const form = document.querySelector(`form`);
// const firstName = document.querySelector(`#first_name`);
// //const lastName = document.querySelector(`#last_name`);
// //const phoneNumber = document.querySelector(`#phone_number`);
// //const email = document.querySelector(`#email_address`);
// //const userMessage = document.querySelector(`#user_message`);

// form.addEventListener(`submit`, function (e) {
//   e.preventDefault();
//   formValidation();
// });

// const setError = function (element, message) {
//   const item1 = element.parentElement;
//   const errorDisplay = item1.querySelector(`.error_message`);
//   errorDisplay.innerHTML = message;

//   item1.classList.add(`error_message`);
//   item1.classList.remove(`sucess_message`);
// };

// const setSucess = function (element) {
//   const item1 = element.parentElement;
//   const errorDisplay = item1.querySelector(`.error_message`);
//   errorDisplay.innerHTML = ``;

//   item1.classList.add(`sucess_message`);
//   item1.classList.remove(`error_message`);
// };

// const formValidation = function () {
//   const firstNameValue = firstName.value.trim();
//   //const lastNameValue = lastName.value.trim();
//   //const phoneNumberValue = phoneNumber.value.trim();
//   //const emailValue = phoneNumber.value.trim();
//   // const userMessageValue = userMessage.value.tirm();

//   if (firstNameValue === ``) {
//     setError(firstName, `space cannot be blank`);
//   } else {
//     setSucess(firstName);
//   }
// };
