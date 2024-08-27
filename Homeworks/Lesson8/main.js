// 1
const users = {
    friends: [1, 2, 3, 4, 5],
    xxx: {},
    a: 'a',
    b: 'b',
    name(a, b) {
        return a + b
    },
    surname() {
    },
}

const copyObject = (obj) => {
    if (typeof obj !== 'object') return obj;
    const logicOfObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            logicOfObj[key] = obj[key].bind({});
        }
    }
    return {...JSON.parse(JSON.stringify(obj)), ...logicOfObj};
}

const copyUsers = copyObject(users);
console.log(copyUsers)
console.log(copyUsers.name === users.name);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const newCoursesAndDurationArray = coursesAndDurationArray.map((course, index) => ({...course, id: index + 1}));
console.log(newCoursesAndDurationArray)


