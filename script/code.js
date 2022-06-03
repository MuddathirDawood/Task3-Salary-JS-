const btnDisplay = document.getElementById('calculate');

btnDisplay.addEventListener('click', ()=>{
    let hours = document.getElementById('hours').value;
    let rates = document.getElementById('rate').value;

    let salary = hours * rates;

    document.getElementById('output').innerHTML = 'R ' + salary;
})

function reset(){
    // let hours = 0;
    // let rates = 0;
    // let salary = 0;
    document.getElementById('hours').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('output').innerText = 'R ' + salary;
}