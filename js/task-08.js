const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", makeSub);

function makeSub(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, enter your information");
  }
  console.log({ email: email.value, password: password.value });
  e.currentTarget.reset();
}
