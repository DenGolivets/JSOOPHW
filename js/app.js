const allcars = [];

class Car {
    constructor(model, mark, country, speed) {
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(value) {
        this.speed += value;
        return this.speed;
    }
    decreaseSpeed(value) {
        this.speed -= value;
        return this.speed;
    }
}

class Truck extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeWeight(weight) {
        const carsInfo1 = `Truck ${this.mark} ${this.model} take ${weight}kg`;
        allcars.push(truck);
        allcars.push(carsInfo1);
    }
}

class Bus extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takePeople(people) {
        const carsInfo2 = `Bus ${this.mark} ${this.model} take ${people}people`;
        allcars.push(bus);
        allcars.push(carsInfo2);
    }
}

class Transporter extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeCars(cars) {
    const carsInfo3 = `Transporter ${this.mark} ${this.model} take ${cars}cars`;
    allcars.push(transporter);
    allcars.push(carsInfo3);
    }
}

const truck = new Truck('Cargo IV', 'Ford', 'USA', 70);
truck.takeWeight(1000);
truck.increaseSpeed(10);
truck.decreaseSpeed(15);

const bus = new Bus('TGE', 'Man', 'Germany', 80);
bus.takePeople(40);
bus.increaseSpeed(15);
bus.decreaseSpeed(5);

const transporter = new Transporter('Actros 2545', 'Mercedes-Benz', 'Germany', 60);
transporter.takeCars(6);
transporter.decreaseSpeed(4);
transporter.increaseSpeed(7);

console.log(allcars);