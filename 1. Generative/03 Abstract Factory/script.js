// Generating (Порождающий)

function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familiCarFactory;
}

function sportCarFactory() {
  return new Z4();
}

function familiCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return 'Z4 is a Sport car!';
  }
}

class I3 {
  info() {
    return 'I4 is a Family car!';
  }
}

const produce = bmwProducer('sport');

const myCar = new produce();

console.log(myCar.info()); // Z4 is a Sport car!