// Select the form elemet on the page and allow the browser to listen for an event (submit) then perform the following activities
// Error Handling: Make sure the user has filled in all the fields before they are allowed to submit
// If they click submit without filling all the fiels show an error message
//Prevent the forms defualt of refreshing when the submit button is clicked/submitted
// Save the inputs as variabes (inputs being what they write in the field)
//** When the user submits, output a message on the form that confirms their submission and the button should change and allow them to submit another set of information "post again"

const form = document.querySelector(`form`);
const firstName = document.querySelector(`#first_name`);
//const lastName = document.querySelector(`#last_name`);
//const phoneNumber = document.querySelector(`#phone_number`);
//const email = document.querySelector(`#email_address`);
//const userMessage = document.querySelector(`#user_message`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  formValidation();
});

const setError = function (element, message) {
  const item1 = element.parentElement;
  const errorDisplay = item1.querySelector(`.error_message`);
  errorDisplay.innerHTML = message;

  item1.classList.add(`error_message`);
  item1.classList.remove(`sucess_message`);
};

const setSucess = function (element) {
  const item1 = element.parentElement;
  const errorDisplay = item1.querySelector(`.error_message`);
  errorDisplay.innerHTML = ``;

  item1.classList.add(`sucess_message`);
  item1.classList.remove(`error_message`);
};

const formValidation = function () {
  const firstNameValue = firstName.value.trim();
  //const lastNameValue = lastName.value.trim();
  //const phoneNumberValue = phoneNumber.value.trim();
  //const emailValue = phoneNumber.value.trim();
  // const userMessageValue = userMessage.value.tirm();

  if (firstNameValue === ``) {
    setError(firstName, `space cannot be blank`);
  } else {
    setSucess(firstName);
  }
};