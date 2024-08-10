const form = document.getElementById("myForm");
const inputs = form.querySelectorAll("input");
const regex = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

//validation function
function validateField(input) {
  let value = input.value.trim();
  let errorMessage = input.nextElementSibling;

  //custom validation rules
  if (input.type === "text" && !value) {
    errorMessage.textContent = "Name is required";
    errorMessage.style.display = "block";
    return false;
  } else if (input.type === "email" && !value) {
    errorMessage.textContent = "Email is required";
    errorMessage.style.display = "block";
    return false;
  } else if (input.type === "email" && !regex.test(value)) {
    errorMessage.textContent = "Enter valid email";
    errorMessage.style.display = "block";
    return false;
  } else if (input.type === "password" && value.length < 6) {
    errorMessage.textContent = "Password length should be more than 6";
    errorMessage.style.display = "block";
    return false;
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}

//event listener for form submission

form.addEventListener("submit", function (event) {
  let valid = true;
  let name, email, password;

  inputs.forEach((input) => {
    if (!validateField(input)) {
      valid = false;
    }

    //assign values to the variables

    if (input.name === "name") {
      name = input.value.trim();
    } else if (input.name == "mailId") {
      email = input.value.trim();
    } else if (input.name === "userPassword") {
      password = input.value.trim();
    }
  });
  //if validation fails we will prevent the form submmission
  if (!valid) {
    event.preventDefault();
  } else {
    //log the values of each

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  }
});

//for real time updation

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    validateField(input);
  });
});
