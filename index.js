const form = document.querySelector("form");
const btn = document.querySelector(".button");
const inpt = document.querySelector("input");

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

btn.addEventListener("click", function() {
  if (ValidateEmail(document.form.text) === false) {
    form.classList.add("error");
  }
});

inpt.addEventListener("click", function() {
  form.classList.remove("error");
});
