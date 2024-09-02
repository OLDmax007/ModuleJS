// 1 #sH8c4er
const spanText = document.querySelector('#text');
const buttonShow = document.querySelector('.btn-show');

buttonShow.onclick = function () {
    spanText.classList.toggle('show-elm')
}

// 2 #j693ca8
const inputAge = document.querySelector('.t2-age')
const buttonConfirm = document.querySelector('.btn-confirm')
buttonConfirm.onclick = function () {
    const pMessage = document.querySelector('.message')
    inputAge.value < 18 ? pMessage.innerText = 'Your age is less 18' : pMessage.innerText = 'Good'
}

// 3 #ymAmN2xJ
const form = document.getElementsByTagName('form')[0]
form.onsubmit = function (event) {
    event.preventDefault();
}
const inputs = Array.from(form.querySelector('.inputs').children)


const buttonShowInfo = form.querySelector('.btn-show-info');
buttonShowInfo.onclick = function () {
    const blockInfo = document.querySelector('.block-info');
    const objInfo = {};
    inputs.forEach(inp => {
        objInfo[inp.classList] = inp.value;
    })
    blockInfo.innerText = JSON.stringify(objInfo, null, 2);
}

// 4 #2VaLt4vDczH
let counter = sessionStorage.getItem('number') || 0;
counter++;
sessionStorage.setItem('number', counter);

// 6 #Jg0gPO00
const conventor = document.querySelector('.conventor');
const result = document.querySelector('.result');
conventor.oninput = function () {
    result.innerText = conventor.value * 2.2;
}

// 7 #RbQGnH5DuC
function addToLocalStorage(arrayName, objToAdd) {
    const val = localStorage.getItem(arrayName);
    if (!val) {
        throw new Error('Not array');
    }
    if (typeof objToAdd !== 'object') {
        throw new Error('objToAdd is not object')
    }
    const arr = JSON.parse(val);
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}


addToLocalStorage('arr2', 1);


// 8 #kUSgFqWY
const buttonShowTable = document.querySelector('.btn-show-table');
buttonShowTable.onclick = function () {
    const table = document.createElement('table');
    const rows = +document.querySelector('.row').value // 4
    const cells = +document.querySelector('.cell').value // 5

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const cell = document.createElement('td');
            cell.innerText = document.querySelector('.content').value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table)
}
