class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

class Iterator2 {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Mercedes']);

while (collection.hasNext()) {
  console.log(collection.next());
}

const autos = {
  audi: { model: 'Audi', color: 'black', price: '20000' },
  bmw: { model: 'Bmw', color: 'white', price: '30000' },
  tesla: { model: 'Tesla', color: 'gray', price: '40000' },
};

const collection2 = new Iterator2(autos);

while (collection2.hasNext()) {
  console.log(collection2.next());
}
