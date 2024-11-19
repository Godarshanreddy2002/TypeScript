//Example class that is implementing an interface


interface Person {
  name: string;
  age: number;
  wish(): void;
}

class Employee implements Person {
  constructor(public name: string, public age: number) {

  }

  wish(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of Employee which is implemented from Person
const employee1:Employee = new Employee("Godarshan", 25);
employee1.wish();

/**
output:-
[LOG]: "Hello, my name is Godaeshan and I am 25 years old." 
  
*/

