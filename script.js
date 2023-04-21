//
import app from "./firebaseConfig.js";
import {getDatabase, ref, push, onValue, get} 
from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// the reference to the database app
const database = getDatabase(app);



// reference to the products in our database
const productRef = ref(database, "/inventory");

//create a ref to the cartCount in the database
const cartCountRef = ref(database, "/cartCount");


// global variables
// variable called firebaseData to pass along when needed
let firebaseData;

// variable productDivContainer to grab the DIV element to manipulate
const productDivContainer = document.querySelector("#product-items-container");
// add a class to the div container to style it. 
productDivContainer.classList.add("product-items");


// use onValue method to listen for changes, grabbing the data and getting a snapshot of the data
onValue(productRef, (data) => {
  // get the value from the database and attach it to a variable called firebaseData [array] 
  firebaseData = data.val();
// call the displayItems function and pass along the firebaseData [array]
  displayItems(firebaseData);

});
// create a function to display items on page instead of the onValue, to play with the scope
const displayItems = (productData) =>{
  // clean the container where all the list will be so that when you filter the array it wont keep adding items to the existing list
  productDivContainer.innerHTML="";
  for (let key in productData) {
    // console.log(productData[key]);
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
    //add a class name to the p element
    paraSubTitleItem.className = "prices";
    paraSubTitleItem.innerHTML = productPrice;
    //appending the plant image, paragraphs and add to cart button to the divItem
    divItem.append(plantImg, buttonItem, paraTitleItem, paraSubTitleItem);
    buttonItem.append(buttonImg);
    //appending our div item to the div item with an id of product-items-container
    document.querySelector("#product-items-container").append(divItem);

  }

}

// CODE FOR FILTERING AND THEN DISPLAYING ITEMS ON THE PAGE


// --------------------------------------------------------------------------------------------------------------------
// CODE FOR OTHER MVP















