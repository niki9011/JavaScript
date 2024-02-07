const baseUrl = "http://localhost:3030/jsonstore/tasks/";
const loadVacationsButton = document.getElementById("load-vacations");
const vacationsList = document.getElementById("list");

loadVacationsButton.addEventListener("click", (e) => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((result) => {
      renderVacations(Object.values(result));
    });
});

function renderVacations(vacations) {
  vacations
    .map(renderVacation)
    .forEach((vacationElement) => vacationsList.appendChild(vacationElement));
}

function renderVacation(vacation) {
  const container = document.createElement("div");
  container.className = "container";

  const h2Element = document.createElement("h2");
  h2Element.textContent = vacation.name;

  const h3DateElement = document.createElement("h3");
  h3DateElement.textContent = vacation.date;

  const h3DaysElement = document.createElement("h3");
  h3DaysElement.textContent = vacation.days;

  const changeButton = document.createElement("button");
  changeButton.className = "change-btn";
  changeButton.textContent = "Change";

  const doneButton = document.createElement("button");
  doneButton.className = "done-btn";
  doneButton.textContent = "Done";

  container.appendChild(h2Element);
  container.appendChild(h3DateElement);
  container.appendChild(h3DaysElement);
  container.appendChild(changeButton);
  container.appendChild(doneButton);

  return container;
}
