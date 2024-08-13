// 1
for (let i = 0; i <= 10; i++) {
    document.write(`<div>cat</div>`)
}

// 2
for (let i = 0; i <= 10; i++) {
    document.write(`<div>dog ${i}</div>`)
}

// 3
let i1 = 0;
while (i1 <= 20) {
    document.write(`<h1>Hello</h1>`)
    i1++
}

// 4
let i2 = 0;
while (i2 <= 20) {
    document.write(`<h1>Hello world! ${i2}</h1>`)
    i2++
}

// 5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)

// 6
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://img.freepik.com/free-photo/high-angle-tea-glass-with-crystallized-sugar_23-2148759265.jpg?t=st=1723507243~exp=1723510843~hmac=3e3f6ef23ed469f2cb8fd1a004d86f5ec2e2daa8ff75668b4043f53523572d3b&w=360'
    },
];

for (const product of products) {
    document.write(` <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class='product-image'>
</div>`)
}

// 7
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.status) {
        document.write(`<p>${user.name} - ${user.status}</p>`)
    }
}

document.write("------------------------")

for (const user of users) {
    if (!user.status) {
        document.write(`<p>${user.name} - ${user.status}</p>`)
    }
}

document.write("------------------------")

for (const user of users) {
    if (user.age > 30) {
        document.write(`<p>${user.name} - ${user.age}</p>`)
    }
}