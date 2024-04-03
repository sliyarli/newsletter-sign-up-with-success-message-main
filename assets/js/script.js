// This event listener waits for the entire HTML document to be loaded before running the contained code.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieving elements from the document using their unique IDs or classes to manipulate them later.
  const formElement = document.getElementById("form");
  const signUpCard = document.getElementById("sign-up-card");
  const errorSpan = document.getElementById("error-span");
  const emailInput = document.getElementById("email");
  // Note: getElementsByClassName returns a collection; [1] gets the second element in this collection.
  const successButton = document.getElementsByClassName("sign-up-button")[1];
  const successMessage = document.getElementById("success-message");

  // Function to display an error message
  function showError(Message) {
    errorSpan.innerText = Message; // Sets the text of the error span to the provided message.
    errorSpan.classList.add("show"); // Shows the error message by adding the 'show' class.
    emailInput.classList.add("is-invalid"); // Highlights the email input as invalid.
  }

  // Function to clear any displayed error messages
  function clearError() {
    errorSpan.innerText = ""; // Clears the error message text.
    errorSpan.classList.remove("show"); // Hides the error message by removing the 'show' class.
    emailInput.classList.remove("is-invalid"); // Removes the invalid highlight from the email input.
  }

  // Function to check if the email input is empty
  function checkEmpty() {
    if (emailInput.value.trim() == "") {
      // Checks if the input is empty or contains only whitespaces.
      showError("You must fill the input"); // Calls showError function with a message if input is empty.
      return true; // Returns true indicating the input is empty.
    } else {
      clearError(); // Clears any error messages if the input is not empty.
      return false; // Returns false indicating the input is not empty.
    }
  }

  // Function to trigger the validation process
  function validateInput() {
    if (!checkEmpty()) {
      // First, check if the input is not empty.
      validateEmail(); // If not empty, proceed to validate the email format.
    }
  }

  // Function to validate the email format using a regular expression
  function validateEmail() {
    // Regular expression to validate email format.
    const regex = /.../; // Simplified for readability; see the original regex in your code.

    // Tests if the email input matches the regex pattern.
    regex.test(emailInput.value.trim())
      ? clearError() // If it matches, clear any error messages.
      : showError("Valid email required"); // If it doesn't match, show an error message.
  }

  // Adding an input event listener to the email input to validate in real-time.
  emailInput.addEventListener("input", validateInput);

  // Adding a submit event listener to the form.
  formElement.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the form from submitting in the traditional way.

    validateInput(); // Validates the input on form submission.

    // Checks if there are any elements with the class 'is-invalid'.
    const isFormValid = !document.querySelectorAll(".is-invalid").length;

    if (isFormValid) {
      // If the form is valid,
      clearError(); // clear any error messages,
      formElement.reset(); // reset the form,
      signUpCard.classList.add("hide"); // hide the sign-up card,
      successMessage.classList.add("show"); // and show the success message.
    } else {
      signUpCard.classList.remove("hide"); // If not valid, ensure the sign-up card is shown
      successMessage.classList.remove("show"); // and the success message is hidden.
    }

    // Adds a click event listener to the 'success' button to return to the sign-up card.
    successButton.addEventListener("click", function () {
      signUpCard.classList.remove("hide"); // Shows the sign-up card.
      successMessage.classList.remove("show"); // Hides the success message.
    });
  });
});

// Note: This JavaScript file has been commented by ChatGPT.
