// 1 #8Nmt60ZT
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.style.backgroundColor = 'red';
div.style.color = 'black';
div.style.fontSize = '24px';
document.body.append(div);

// 2 #OPLI89c9G
const words = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');
words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    ul.append(li);
})
document.body.append(ul)


// 3 #jeBqHV525U5
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const courses = document.createElement('section');
courses.classList.add('courses');
document.body.append(courses);
coursesAndDurationArray.forEach(course => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${course.title}</h3><p>${course.monthDuration}</p>`
    courses.append(div);
} )

// 4 #Kx1xgoKy8
const newCourses = document.createElement('section');
newCourses.classList.add('new-courses');
document.body.appendChild(newCourses);
coursesAndDurationArray.forEach((course, index) => {
    const div = document.createElement('div');
    div.classList.add(`item-${index+1}`)
    div.innerHTML = `<h1 class='heading'>${course.title}</h1><p class='description'>${course.monthDuration}</p>`
    newCourses.append(div);
} )




