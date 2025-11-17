class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //instance method
    this.sayHey = function () {
      console.log("Hey");
    };
  }

  //prototype method
  sayHello() {
    //this belongs to object
    console.log("Hello");
  }

  //static methods
  static sayBye() {
    //this belongs to class
    console.log("Bye");
  }

  //private methods
}

const a = new A("U", 2);
const b = new A("G", 3);

console.log(a.sayHey === b.sayHey);
console.log(a.sayHello === b.sayHello);

A.sayBye();
