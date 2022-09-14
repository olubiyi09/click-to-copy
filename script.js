const inputField = document.querySelector(".input-area");
const button = document.querySelector(".btn");

button.addEventListener("click", copyInput);

function copyInput(e) {
  e.preventDefault();

  // inputField.select();
  // inputField.setSelectionRange(0, 1000);
  // document.execCommand("copy");
  if (inputField.value == "") {
    alert("Nothing to copy!!!");
  }
  navigator.clipboard.writeText(inputField.value).then(() => {
    inputField.select();
    button.innerHTML = `Copied!!!`;

    setTimeout(() => {
      button.innerHTML = `Copy`;
    }, 2000);
  });

  // button.innerHTML = `Copied!!!`;

  // setTimeout(() => {
  //   button.innerHTML = `Copy`;
  // }, 2000);
}
