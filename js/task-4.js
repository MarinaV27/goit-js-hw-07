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

function handleSubmit(event){
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();
    
    if (email === "" || password === "") {
      alert("Всі поля форми повинні бути заповнені");
      return; // Вийти з функції, якщо перевірка не пройшла
    }
    
    // Якщо перевірка пройшла, залогувати інфо і скинути форму
    const info = { email, password };
    console.log(info);
    event.currentTarget.reset();
  }
  





