// Generating (Порождающий)

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototypeCar = new TeslaCar('S', 80000, 'black', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = 'white';
car1.autopilot = true;


console.log(car1);
// TeslaCar {
//   model: 'S',
//   price: 80000,
//   interior: 'white',
//   autopilot: true
// }

console.log(car2);
// TeslaCar {
//   model: 'S',
//   price: 80000,
//   interior: 'black',
//   autopilot: false
// }

console.log(car3);
// TeslaCar {
//   model: 'S',
//   price: 80000,
//   interior: 'black',
//   autopilot: false
// }