// Arrays and objects
// 1
const array = [true, false, 1, 2, 3, 4, 5, 'dog', 'cat', 'elephant'];
console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);

// 2
const book1 = {
    title: 'Blade runner',
    pageCount: 75,
    genre: 'Mystery'
};

const book2 = {
    title: 'To kill a rabbit',
    pageCount: 250,
    genre: 'Thriller'
};

const book3 = {
    title: 'Biography of Julius Caesar',
    pageCount: 500,
    genre: 'Historical'
};

// 3
const newBook1 = {
    title: 'Blade runner',
    pageCount: 75,
    genre: 'Mystery',
    authors: [
        {name: 'Olver Droman', age: 32}
    ]
};

const newBook2 = {
    title: 'To kill a rabbit',
    pageCount: 250,
    genre: 'Thriller',
    authors: [
        {name: 'Sam Zigbert', age: 60}
    ]
};

const newBook3 = {
    title: 'Biography of Julius Caesar',
    pageCount: 500,
    genre: 'Historical',
    authors: [
        {name: 'Porman Badly', age: 80}
    ]
};

// 4
const users = [
    { name: 'Max', username: 'maxsimus', password: 'passMax123' },
    { name: 'Oleg', username: 'oleg223', password: 'olegPf456' },
    { name: 'Olya', username: 'olya224', password: 'olyaPs789' },
    { name: 'Petr', username: 'petr122', password: 'petrddfs101' },
    { name: 'Mariya', username: 'mar151', password: 'mariyaPass112' },
    { name: 'Ivan', username: 'ivan234', password: 'ivanPadfsdfs123' },
    { name: 'Anna', username: 'anna345', password: 'annaPdf134' },
    { name: 'Viktor', username: 'viktor456', password: 'viktorASD145' },
    { name: 'Sasha', username: 'sasha567', password: 'sasha156' },
    { name: 'Dmitro', username: 'dmitro678', password: 'dmitro167' }
];

console.log(
    users[0].password,
    users[1].password,
    users[2].password,
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password
);


const weeklyTemp = [
    { day: 'Monday', morning: 10, afternoon: 30, evening: 15 },
    { day: 'Tuesday', morning: 12, afternoon: 28, evening: 16 },
    { day: 'Wednesday', morning: 14, afternoon: 26, evening: 17 },
    { day: 'Thursday', morning: 13, afternoon: 27, evening: 18 },
    { day: 'Friday', morning: 11, afternoon: 29, evening: 14 },
    { day: 'Saturday', morning: 15, afternoon: 25, evening: 19 },
    { day: 'Sunday', morning: 16, afternoon: 24, evening: 20 }
];

// Conditionals

// 1
let x;
x = 1;
// x = 0;
// x = -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// 2
const time = +prompt('Enter time');
if (time <= 15) {
    console.log('First quarter');
} else if (time >= 16 && time <= 30) {
    console.log('Second quarter');
} else if (time >= 31 && time <= 45) {
    console.log('Third quarter');
} else if (time >= 46 && time <= 60) {
    console.log('Fourth quarter');
} else {
    console.log('Invalid time')
}

// 3
const day = +prompt('Enter day');
if (day >= 1 && day <= 10) {
    console.log('First decade')
} else if (day >= 11 && day <= 20){
    console.log('Second decade')
} else if (day >= 21 && day <= 31) {
        console.log('Third decade')
} else {
    console.log('Invalid day')
}

// 4
const dayOfWeek = +prompt('Enter day of week');
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}

// 5
const num1 = prompt('Enter number1');
const num2 = prompt('Enter number2');
if (num1 === num2) {
    console.log('Equal numbers');
} else if (num1 < num2) {
    console.log(num2)
} else  {
    console.log(num1)
}

// 6
let x2;
x2 = x2 || 'default';
console.log(x2);

// 7
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[1].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[2].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[3].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[4].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[5].monthDuration > 5) {console.log('Супер')}