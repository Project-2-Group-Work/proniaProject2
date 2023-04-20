//
import app from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// the reference to the database app
const database = getDatabase(app);

// reference to the products in our database
const productRef = ref(database, "/inventory");

//create a ref to the cartCount in the database
const cartCountRef = ref(database, "/cartCount");

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
  }
});
