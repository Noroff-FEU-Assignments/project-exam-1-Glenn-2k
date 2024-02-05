const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const contactForm = document.querySelector(".contactForm");
export function formValidator() {
  if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
  }
}

export function validateForm(event) {
  if (checkLength(name.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    event.preventDefault();
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    event.preventDefault();
  }

  if (checkLength(subject.value, 14) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    event.preventDefault();
  }

  if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    event.preventDefault();
  }
}

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
