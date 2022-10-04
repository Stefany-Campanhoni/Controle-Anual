// Table info
const total = document.getElementById('total');
const info = document.getElementById('datas');

// Input by user
const month = document.getElementById('months');
const amount = document.getElementById('amount');
const restartButton = document.getElementById('restartButton');

var ln = true;
var colNum;
var previousAmount = 0;
var previousMonth = 0;

function add() {
    // Verification
    if (amount.value == '') {
        return alert('Preencha o campo "valor"!');
    }

    document.querySelectorAll('#months option').forEach(opt => {
        if (opt.value == month.options[month.selectedIndex].text) {
            opt.disabled = true;
        }
    });

    // Creating table datas
    let tdLeft = document.createElement('td');
    let tdRight = document.createElement('td');
    let row = document.createElement('tr');

    // Insert values into dt
    tdLeft.textContent = month.options[month.selectedIndex].text;
    tdLeft.className = 'left one';
    tdRight.textContent = 'R$' + Number(amount.value).toFixed(2);
    tdRight.className = 'right two';
    if (ln) {
        tdLeft.className = 'left one';
        tdRight.className = 'right two';
        ln = false;
    } else {
        tdLeft.className = 'left three';
        tdRight.className = 'right four';
        ln = true;
    }

    // Insert dt into a row
    info.appendChild(row);
    row.appendChild(tdLeft);
    row.appendChild(tdRight);

    // Increment total
    let x = Number(amount.value) + previousAmount;
    total.textContent = 'R$' + x.toFixed(2);
    previousAmount = x;
}