const inputField = document.querySelector(".input-area");
const button = document.querySelector(".btn");

button.addEventListener("click", copyInput);

function copyInput(e) {
  e.preventDefault();

  inputField.select();
  inputField.setSelectionRange(0, 1000);
  document.execCommand("copy");
  button.innerHTML = `Copied!!!`;

  setTimeout(() => {
    button.innerHTML = `Copy`;
  }, 2000);
}
