class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0');
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8!');
  }
}

class EnigneV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}


const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine); // Engine 2.0

const myCar2 = new Auto();
const engineAdapter = new EnigneV8Adapter(new EngineV8());

myCar2.startEngine(engineAdapter); // Engine V8!

// Error
// const myCar3 = new Auto();
// const engineAdapter2 = new EngineV8();

// myCar3.startEngine(engineAdapter2);