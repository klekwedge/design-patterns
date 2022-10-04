class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) {
      return model;
    }
    console.count('model');
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW'); // model: 1
const audi = factory.create('Audi'); // model: 2
const tesla = factory.create('Tesla'); // model: 3
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());

// ┌─────────┬─────────┐
// │ (index) │  model  │
// ├─────────┼─────────┤
// │   BMW   │  'BMW'  │
// │  Audi   │ 'Audi'  │
// │  Tesla  │ 'Tesla' │
// └─────────┴─────────┘

