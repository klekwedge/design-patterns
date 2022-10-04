class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);

    this.addToCustomerList(name);
  }

  addToCustomerList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();

const ben = new Customer('Ben', mediator);
const leo = new Customer('Leo', mediator);

ben.makeOrder('Tesla', 'With autopilot');
// Order name: Ben. Order auto is Tesla
// Additional info: With autopilot

leo.makeOrder('Audi', 'With parktronic');
// Order name: Leo. Order auto is Audi
// Additional info: With parktronic

console.log(mediator.getCustomerList()); // [ 'Ben', 'Leo' ]