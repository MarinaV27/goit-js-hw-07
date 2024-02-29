const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
const elements = event.currentTarget.elements;
const info = { 
    email: elements.email.value,
    password: elements.password.value,
}  
console.log(info);

if (info.email.trim() === "" || info.password.trim() === "") {
    alert ("All form fields must be filled in");
  }
event.currentTarget.reset();
}







