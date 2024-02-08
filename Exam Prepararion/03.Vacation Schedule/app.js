const baseUrl = "http://localhost:3030/jsonstore/tasks/";
const loadVacationsButton = document.getElementById("load-vacations");
const vacationList = document.getElementById("list");
const nameInput = document.getElementById("name");
const numDaysInput = document.getElementById("num-days");
const fromDateInput = document.getElementById("from-date");
const formAddButton = document.getElementById("add-vacation");
const formEditButton = document.getElementById("edit-vacation");

loadVacationsButton.addEventListener("click", loadVacations);

formAddButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Get data from inputs
  const newVacations = {
    name: nameInput.value,
    days: numDaysInput.value,
    date: fromDateInput.value,
  };
  // Sent post request to server
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newVacations),
  })
    // Get vacantions
    .then(loadVacations)
    .then(clearForm);
});

// Clear inputs
function clearForm() {
  nameInput.value = "";
  numDaysInput.value = "";
  fromDateInput = "";
}

function loadVacations() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((result) => {
      renderVacations(Object.values(result));
    });
}

function renderVacations(vacations) {
  vacationList.innerHTML = "";

  vacations
    .map(renderVacation)
    .forEach((vacationElement) => vacationList.appendChild(vacationElement));
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
  changeButton.addEventListener("click", () => {
    

    // add to form fields
    nameInput.value = vacation.name;
    numDaysInput.value = vacation.days;
    fromDateInput = vacation.date;

    // remove from confirmed list
    container.remove();

    // activate the edit vacation button
    formEditButton.removeAttribute('disabled');

    // deactivate add vacation button
    formAddButton.setAttribute('disabled', 'disabled');


  });

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

// send put request to

// load vacations
