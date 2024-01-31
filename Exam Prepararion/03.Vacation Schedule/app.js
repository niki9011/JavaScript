const baseUrl = 'http://localhost:3030/jsonstore/tasks/'
const loadVacationsButton = document.getElementById('load-vacations');
const vacationsList = document.getElementById('list');

loadVacationsButton.addEventListener('click', (e) => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(result => {console.log(result);})
});

function renderVacations(vacations){

}

function renderVacation(vacations){
    const container = document.createElement('div');
    container.className = 'container';

    const h2Element = document.createElement('h2');
    h2Element.textContent = vacations.name;


    const h3DateElement =  document.createElement('h3');
    h3DateElement.textContent  = vacations.date;


    const h3DaysElement = document.createElement('h3');
    h3DaysElement = vacations.days;


    const changeButton = document.createElement('button');
    changeButton.className = 'change-btn';

    const doneButton = document.createElement('button');
    doneButton.className = 'done-btn';


    
}