// 1
const square = (a, b) => a * b;

console.log(square(2, 5));

// 2
const squareCircle = r => Math.PI * r ** 2;

console.log(squareCircle(25));

// 3
const squareCylinder = (r, h) => 2 * Math.PI * r * (h + r);

console.log(squareCylinder(50, 10));

// 4
const createP = text => document.write(`<p>${text}</p>`);

createP('tiger');

// 5
const createLimitPointsOfList = text => {
    document.write(`<ul>
<li>${text}</li><li>${text}</li><li>${text}</li>
</ul>`);
}

createLimitPointsOfList('cat');

// 6
const createUnlimitedPointsOfList = (text, quantLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < quantLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

createUnlimitedPointsOfList('dog', 10, 0);

// 7
function createArraySomeValues(i, ...values) {
    if (i === 0) {
        document.write(`<ul>`);
    }
    document.write(`<li>${values[i]}</li>`);
    i++;
    if (i < values.length) {
        createArraySomeValues(i, ...values);
    } else {
        document.write(`</ul>`);
    }
}

createArraySomeValues(0, 'a', 'b', 'c', true, false, 1, 2, 3);

// 8
const users = [
    {id: 1, name: 'John Doe', age: 28},
    {id: 2, name: 'Jane Smith', age: 34},
    {id: 3, name: 'Alice Johnson', age: 25}
];

const printObjects = (array, i) => {

    const arrayElement = array[i];
    document.write(`<div class="info-user-${i + 1}">
            ${arrayElement.id}
            ${arrayElement.name}
            ${arrayElement.age} </div>`)
    i++;
    if (i < array.length) {
        printObjects(users, i)
    }
}

printObjects(users, 0)

// 9
const findMinNum = nums => {
    let minNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minNum) {
            minNum = nums[i];
        }
    }
    return minNum;
}

console.log(findMinNum([40, 30, 2, 1, 5, 0.1]))

// 10
function sumNums(nums, count, i) {
    count += nums[i];
    i++;
    if (i < nums.length) {
        return sumNums(nums, count, i)
    }
    return count;
}

console.log(sumNums([1, 2, 3, 4, 5], 0, 0))

// 11
const swap = (arr, index1, index2) => {
    const val = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = val;
    return arr
}

console.log(swap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 2));

// 12
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let valOfCurrency = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            valOfCurrency = currencyValues[i].value;
        }
    }
    return parseInt(sumUAH / valOfCurrency);
}


console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD', 0));