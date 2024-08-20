// 1
const sents = ['hello world', 'lorem ipsum', 'javascript is cool'];
sents.forEach(str => console.log(str.length));

// 2, 3
const sentsUpperCase = sents.map(str => str.toUpperCase());
const sentsLowerCase = sentsUpperCase.map(str => str.toLowerCase());
console.log(sentsUpperCase, sentsLowerCase)

// 4
let str = ' dirty string   ';
const newStr = str.split(' ').filter(symbol => symbol).join(' '); // trim()
console.log(newStr);

// 5
const stringToArray = str => typeof str === 'string' ? str.split(' ') : undefined;
console.log(stringToArray('dog cat tiger'));

// 6
const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strNums = nums.map(num => num.toString());
console.log(strNums)

// 7
sortNums = (array, direction) => {
    return array.sort((num1, num2) => direction);
}
console.log(sortNums([1, 2, 3, 4, 5].reverse(), 1));

// 8
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const updatedCoursesAndDurationArray = coursesAndDurationArray.sort((course1, course2) => {
    if (course1.monthDuration < course2.monthDuration) return 1
}).filter(course => course.monthDuration > 5).map((course, index) => ({...course, id: index + 1}));

console.log(updatedCoursesAndDurationArray);

// 9

const descriptionCards = {
    cardSuit: ['spade', 'diamond', 'heart', 'club'],
    value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
    color: ['red', 'black']
}

const deckOfCards = [];
for (const suit of descriptionCards.cardSuit) {
    for (const value of descriptionCards.value) {
        deckOfCards.push({
            suit, value, color: ['spade', 'club'].includes(suit) ? 'black' : 'red'
        })
    }
}
console.log(deckOfCards)

console.log(deckOfCards.find(card => card.suit === 'spade' && card.value === 'jack'));
console.log(deckOfCards.filter(card => card.value === '6'));
console.log(deckOfCards.filter(card => card.color === 'red'));
console.log(deckOfCards.filter(card => card.suit === 'diamond'));
console.log(deckOfCards.filter(card => card.suit === 'club' && descriptionCards.value.slice(2).includes(card.value)));

// 10
const reducedDeckOfCards = deckOfCards.reduce((acc, card) => {
    switch (card.suit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'club':
            acc.clubs.push(card);
            break;
    }
    return acc
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})

console.log(reducedDeckOfCards)

// 11
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesHaveSass = coursesArray.filter(course => course.modules.includes('sass'))
const coursesHaveDocker = coursesArray.filter(course => course.modules.includes('docker'))
console.log(coursesHaveSass, coursesHaveDocker)