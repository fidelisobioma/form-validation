const email = document.querySelector("#email");
const postalCode = document.querySelector("#postalcode");
const postmessage = document.querySelector("#postmessage");
const password = document.querySelector("#password");
const passMessage = document.querySelector("#passmessage");
const confirmPassword = document.querySelector("#confirmpassword");
const confmessage = document.querySelector("#confmessage");
const success = document.querySelector(".success");
console.log(success);
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
    postmessage.textContent = postalCode.validationMessage;
  } else {
    postmessage.textContent = "";
  }

  if (!password.checkValidity()) {
    passMessage.textContent = password.validationMessage;
  } else {
    passmessage.textContent = "";
  }

  if (confirmPassword.value !== password.value) {
    confmessage.textContent = "password does not match";
  } else {
    confmessage.textContent = "";
  }
  //add success message
  if (
    emailMessage.textContent == "" &&
    postmessage.textContent == "" &&
    passMessage.textContent == "" &&
    confmessage.textContent == ""
  ) {
    setTimeout(() => {
      success.classList.add("showsuccess");
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
});
// console.log(emailMessage);
