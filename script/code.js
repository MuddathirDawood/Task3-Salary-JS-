const btnDisplay = document.getElementById('calculate');

btnDisplay.addEventListener('click', ()=>{
    hours = document.getElementById('hours').value;
    rates = document.getElementById('rate').value;

    salary = hours * rates;

    document.getElementById('output').innerHTML = 'R ' + salary;
})

function reset(){
    hours = 0;
    rates = 0;
    salary = 0;
    document.getElementById('output').innerHTML = 'R ' + salary;
}