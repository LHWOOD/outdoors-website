//function expression to select elements

const selectElement = (s) => document.querySelector(s);

//open the menu on click

selectElement(".open").addEventListner("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//close the menu on click

selectElement(".close").addEventListner("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
