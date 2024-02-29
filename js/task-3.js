const userName = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
userName.addEventListener("input", handleInput);
function handleInput (event){
   output.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  }
  
}
  


