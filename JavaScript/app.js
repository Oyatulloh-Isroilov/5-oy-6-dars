import { data } from "./data.js";
const body = document.getElementById("tbody");
const carsMenu = document.getElementById("carsMenu");
const year = document.getElementById("year");

year.addEventListener("change", function () {
  let selectedYear = this.value;
  alert(selectedYear);
  let carY = data.filter((el) => {
    return el.year == selectedYear;
  });
  let items = "";
  tbody.innerHTML = "";
  carY.forEach((el) => {
    let tr = `
  <tr>
    <td>${el.id}</td>
    <td>${el.name}</td>
    <td>${el.year}</td>
    <td>${el.color}</td>
    <td>${el.price}</td>
    <td>${el.status}</td>
  </tr>
`;
    items += tr;
  });
  tbody.innerHTML += items;
});

carsMenu.addEventListener("change", function () {
  let selectedCar = this.value;
  let selectedCars = data.filter((el) => {
    return el.name == selectedCar;
  });
  let items = "";
  tbody.innerHTML = "";
  selectedCars.forEach((el) => {
    let tr = `
  <tr>
    <td>${el.id}</td>
    <td>${el.name}</td>
    <td>${el.year}</td>
    <td>${el.color}</td>
    <td>${el.price}</td>
    <td>${el.status}</td>
  </tr>
`;
    items += tr;
  });
  tbody.innerHTML += items;
});
window.onload = function (params) {
  if (data.length) {
    let items = "";
  }
};
