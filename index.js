const inputsNodes = document.querySelectorAll("input");
const button = document.querySelector("button");
const parrafo = document.querySelector("p");
const inputs = [...inputsNodes];
const formu = document.querySelector("form");

inputs.map((input) => {
  input.addEventListener("keypress", () => {
    if (event.charCode === 13) {
      btnOnClick();
    }
  });
});

button.addEventListener("click",btnOnClick)

/* formu.addEventListener("submit", btnOnClick); */

function btnOnClick(event) {
  event.preventDefault();
  console.log(event)
  let h = 0;
  inputs.map((input) => {
    h += parseInt(input.value);
  });
  parrafo.textContent = `el resultado es: ${h}`;
}

document.addEventListener("visibilitychange",()=>{
    console.log(document.visibilityState )
})
