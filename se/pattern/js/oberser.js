class Subject {
  constructor() {
    this.observers = []
  }

  addObserver(obj) {
    this.observers.push(obj);
    console.log('新增了一个观察者');
  }

  removeObserver(obj) {
    this.observers = this.observers.filter(item => item != obj)
  }

  notify(msg) {
    this.observers.forEach(item => item.update(msg))
    console.log(msg, 'msg');

  }
}

class Observer {
  constructor(updateFn) {
    // this.name = name;
    this.update = updateFn;
  }
}