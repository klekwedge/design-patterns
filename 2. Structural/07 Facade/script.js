class Conveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle Engine!');
  }

  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Interior added!');
  }

  getInterior() {
    console.log('Update interior!');
  }

  setExterior() {
    console.log('Added exterior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics');
  }

  paint() {
    console.log('Car painted!');
  }
}


class ConveyorFacade{
  constructor(car){
    this.car =car;
  }

  assembleCar(){
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changEngine(){
    this.car.getEngine();
    this.car.setEngine();
  }

  changInterior(){
    this.car.getInterior();
    this.car.setInterior();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());
let car = conveyor.assembleCar();

car = conveyor.changEngine();
car = conveyor.changInterior();

console.log(car);

