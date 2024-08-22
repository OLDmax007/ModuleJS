// 1
function UserBuilder(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
for (let i = 0; i < 10; i++) {
    users.push(new UserBuilder(i + 1, `Om${i + 1}`, `Dobr${i + 1}`, `omdobr${i + 1}@gmail.com`, `+380${i + 1}${i}${i}${i}${i}`));
}
console.log(users);


// 2
const evenUsers = users.filter(user => user.id % 2 === 0);
console.log(evenUsers);

// 3
const sortedUsers = users.toSorted((user1, user2) => user1.id - user2.id);
console.log(sortedUsers);

// 4
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
for (let i = 0; i < 10; i++) {
    const order = [];
    order.length = Math.floor((Math.random() * 10) + 1);
    const client = new Client(i + 1, `Om${i + 1}`, `Dobr${i + 1}`, `omdobr${i + 1}@gmail.com`,
        `+380${i + 1}${i}${i}${i}${i}`, order)
    ;
    clients.push(client);
}
console.log(clients)

// 5
const sortedClients = clients.toSorted((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClients)

// 6

function CarBuilder(model, maker, release, maxSpeed, volumeEngine) {
    this.model = model;
    this.maker = maker;
    this.release = release;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`Модель - ${this.model}, виробник - ${this.maker}, рік випуску - ${this.release}, макс.шв - ${this.maxSpeed} , обсяг двигуна - ${this.volumeEngine} `);
    }
    this.increaseMaxSpeed = function (speed) {
        this.maxSpeed += speed;
    };
    this.changeYear = function (year) {
        this.release = year;
    };

    this.addDriver = function (fname, lname, age, statusCertificate) {
        this.driver = {
            fname, lname, age, statusCertificate
        }
        console.log(this.driver);
    }
}

const car = new CarBuilder('ThunderX100', 'Storm Motors', 2023, 320, 5.5);
car.drive()
car.info()
car.increaseMaxSpeed(200);
car.changeYear(1950);
car.info()
car.addDriver('Max', 'Dobrov', 55, true);

// 7

class ClassCarBuilder {
    constructor(model, maker, release, maxSpeed, volumeEngine) {
        this.model = model;
        this.maker = maker;
        this.release = release;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`Модель - ${this.model}, виробник - ${this.maker}, рік випуску - ${this.release}, макс.шв - ${this.maxSpeed} , обсяг двигуна - ${this.volumeEngine} `);
    }

    increaseMaxSpeed(speed) {
        this.maxSpeed += speed;
    };

    changeYear(year) {
        this.release = year;
    };

    addDriver(fname, lname, age, statusCertificate) {
        this.driver = {
            fname, lname, age, statusCertificate
        }
        console.log(this.driver);
    }
}

console.log('\nclass');
const car2 = new CarBuilder('ThunderX100', 'Storm Motors', 2010, 500, 10);
car2.drive()
car2.info()
car2.increaseMaxSpeed(500);
car2.changeYear(2050);
car2.info()
car2.addDriver('Max', 'Dobrov', 55, true);



// 8
class CreateCinderella {
    constructor(name, age, sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
    }
}

const cinderellas = [
    new CreateCinderella('Anna', 18, 36),
    new CreateCinderella('Bella', 19, 37),
    new CreateCinderella('Clara', 20, 38),
    new CreateCinderella('Diana', 21, 39),
    new CreateCinderella('Ella', 22, 40),
    new CreateCinderella('Fiona', 23, 41),
    new CreateCinderella('Gina', 24, 42),
    new CreateCinderella('Hanna', 25, 43),
    new CreateCinderella('Isla', 26, 44),
    new CreateCinderella('Julia', 27, 45)
];

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }}

const prince = new Prince('Albu', 20, 40);
console.log(cinderellas.find(cind => cind.sizeOfFoot === prince.shoe), prince);

Array.prototype.justFor = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// 9
const nums = [1,2,3,4,5]
nums.justFor((num, i, arr) => console.log(i, num, arr))

Array.prototype.justFilter = function (condition) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i])) { result.push(this[i])}
    }
    return result
}

console.log(nums.justFilter((num) => num > 1));
