class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

}

let myCar1 = new Car("Ford", 2014);

var print = document.getElementById('car');
print.innerHTML = "my car is " + myCar1.age() + ' ' + myCar1.name;
