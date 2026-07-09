import "./style.css";

const firstnameErrorAlert = document.getElementById("firstname-error-alert");
const lastnameErrorAlert = document.getElementById("lastname-error-alert");
const emailErrorAlert = document.getElementById("email-error-alert");
const queryErrorAlert = document.getElementById("query-error-alert");
const messageErrorAlert = document.getElementById("message-error-alert");
const consentErrorAlert = document.getElementById("consent-error-alert");

const firstnameInput = document.getElementById("firstname-input");
const lastnameInput = document.getElementById("lastname-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

const submitButton = document.getElementById("submit-button");
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

submitButton.addEventListener("click", (event) => {
  const selectedRadio = document.querySelector(
    'input[name="query-type"]:checked',
  );
  const agreeRule = document.querySelector('input[name="agree-rule"]:checked');
  event.preventDefault();
  if (firstnameInput.value.trim() === "") {
    firstnameErrorAlert.classList.remove("invisible");
    firstnameErrorAlert.classList.add("block");
    firstnameInput.classList.remove("border-gray-500");
    firstnameInput.classList.add("border-red-500");
  } else {
    firstnameErrorAlert.classList.remove("block");
    firstnameErrorAlert.classList.add("invisible");
    firstnameInput.classList.remove("border-red-500");
    firstnameInput.classList.add("border-gray-300");
  }

  if (lastnameInput.value.trim() === "") {
    lastnameErrorAlert.classList.remove("invisible");
    lastnameErrorAlert.classList.add("block");
    lastnameInput.classList.remove("border-gray-500");
    lastnameInput.classList.add("border-red-500");
  } else {
    lastnameErrorAlert.classList.remove("block");
    lastnameErrorAlert.classList.add("invisible");
    lastnameInput.classList.remove("border-red-500");
    lastnameInput.classList.add("border-gray-300");
  }

  if (emailInput.value.trim() === "") {
    emailErrorAlert.textContent = "This field is required";
    emailErrorAlert.classList.remove("invisible");
    emailErrorAlert.classList.add("block");
    emailInput.classList.remove("border-gray-500");
    emailInput.classList.add("border-red-500");
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailErrorAlert.classList.remove("invisible");
    emailErrorAlert.classList.add("block");
    emailInput.classList.remove("border-gray-500");
    emailInput.classList.add("border-red-500");
  } else {
    emailErrorAlert.classList.remove("block");
    emailErrorAlert.classList.add("invisible");
    emailInput.classList.remove("border-red-500");
    emailInput.classList.add("border-gray-300");
  }

  if (!selectedRadio) {
    queryErrorAlert.classList.remove("invisible");
  } else {
    queryErrorAlert.classList.add("invisible");
  }

  if (messageInput.value.trim() === "") {
    messageErrorAlert.classList.remove("invisible");
    messageErrorAlert.classList.add("block");
    messageInput.classList.remove("border-gray-500");
    messageInput.classList.add("border-red-500");
  } else {
    messageErrorAlert.classList.remove("block");
    messageErrorAlert.classList.add("invisible");
    messageInput.classList.remove("border-red-500");
    messageInput.classList.add("border-gray-300");
  }

  if (!agreeRule) {
    consentErrorAlert.classList.remove("invisible");
  } else {
    consentErrorAlert.classList.add("invisible");
  }
});
