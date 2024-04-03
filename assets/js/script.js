document.addEventListener("DOMContentLoaded", function () {
  const formElement = document.getElementById("form");
  const signUpCard = document.getElementById("sign-up-card");
  const errorSpan = document.getElementById("error-span");
  const emailInput = document.getElementById("email");
  const successButton = document.getElementsByClassName("sign-up-button")[1];
  const successMessage = document.getElementById("success-message");

  function showError(Message) {
    errorSpan.innerText = Message;
    errorSpan.classList.add("show");
    emailInput.classList.add("is-invalid");
  }

  function clearError() {
    errorSpan.innerText = "";
    errorSpan.classList.remove("show");
    emailInput.classList.remove("is-invalid");
  }

  function checkEmpty() {
    if (emailInput.value.trim() == "") {
      showError("You must fill the input");
      return true;
    } else {
      clearError();
      return false;
    }
  }

  function validateInput() {
    if (!checkEmpty()) {
      validateEmail();
    }
  }

  function validateEmail() {
    const regex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    regex.test(emailInput.value.trim())
      ? clearError()
      : showError("Valid email required");
  }

  emailInput.addEventListener("input", validateInput);

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    validateInput();

    const isFormValid = !document.querySelectorAll(".is-invalid").length;

    if (isFormValid) {
      clearError();
      formElement.reset();
      signUpCard.classList.add("hide");
      successMessage.classList.add("show");
    } else {
      signUpCard.classList.remove("hide");
      successMessage.classList.remove("show");
    }

    successButton.addEventListener("click", function () {
      signUpCard.classList.remove("hide");
      successMessage.classList.remove("show");
    });
  });
});
