const categories = document.querySelectorAll("ul#categories > li")
      console.log(`Number of categories: ${categories.length}`);
const titles = document.querySelectorAll("h2"); 
titles.forEach (function (title) {
const  titleName = title.textContent;
      console.log(`Category: ${titleName}`);
const categoriesNames = title.parentElement.querySelectorAll("ul > li");
      console.log(`Elements: ${categoriesNames.length}`);
});

