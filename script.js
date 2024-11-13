const email = document.querySelector("#email");
const postalCode = document.querySelector("#postalcode");
const postMessage = document.querySelector("#postmessage");
const password = document.querySelector("#password");
const passMessage = document.querySelector("#passmessage");
const confirmPassword = document.querySelector("#confirmpassword");
const confmessage = document.querySelector("#confmessage");
console.log(confmessage);
const emailMessage = document.querySelector("#emailmessage");
const submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!email.checkValidity()) {
    emailMessage.textContent = email.validationMessage;
  } else {
    emailMessage.textContent = "";
  }

  if (!postalCode.checkValidity()) {
    postMessage.textContent = postalCode.validationMessage;
  } else {
    postMessage.textContent = "";
  }

  if (!password.checkValidity()) {
    passMessage.textContent = password.validationMessage;
  } else {
    passMessage.textContent = "";
  }

  if (confirmPassword.value !== password.value) {
    confmessage.textContent = "password does not match";
  } else {
    confmessage.textContent = "";
  }
});
// console.log(emailMessage);
