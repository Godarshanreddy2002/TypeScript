// class is key word

// class contains properties, constructor, method

// case 1: creating class, object and displaying object details
// --------------------------------------------------------------------------------
/**class Employee
{
    name:string;
    age:number;
    dept:string
    constructor(name:string,age:number,dept:string)
    {
        this.name=name
        this.age=age;
        this.dept=dept;

    }
    employeeDetails()
    {
        console.log(`Employee name is ${this.name} age is ${this.age} and dependent is ${this.dept} `)
    }
}

const emp1=new Employee("Godarshan",22,"Back end developer")
emp1.employeeDetails();
*/
// ----------------------------------------------------------------------------------------


// case 2:initialize object data by using using reference variable
// --------------------------------------------------------------------------------------
/**
class Employee
{
    name:string;
    age:number;
    dept:string
    
    employeeDetails():void
    {
        console.log(`Employee name is ${this.name} age is ${this.age} and dependent is ${this.dept} `)
    }
}

const emp1=new Employee()
emp1.name="godarshan"
emp1.age=22
emp1.dept="manager"
emp1.employeeDetails()

*/

// -------------------------------------------------------------------------------------------------------

// case 3: Acecess modifies

/**
class Employee
{
    private name:string;
    private age:number;
    private dept:string
    constructor(name:string,age:number,dept:string)
    {
        this.name=name
        this.age=age;
        this.dept=dept;

    }
    
    employeeDetails():void
    {
        console.log(`Employee name is ${this.name} age is ${this.age} and dependent is ${this.dept} `)
    }
}

const emp1=new Employee("sudharshan",24,"hr")
// emp1.name="godarshan"   //-- error

emp1.employeeDetails()

*/

// --------------------------------------------------------------------------------cut---

// case 4

class Employee
{
    name:string;
    age:number;
    dept:string
    constructor(name:string,age:number,dept:string)
    {
        this.name=name
        this.age=age;
        this.dept=dept;

    }
    
    employeeDetails():void
    {
        console.log(`Employee name is ${this.name} age is ${this.age} and dependent is ${this.dept} `)
    }
}

const emp1=new Employee("sudharshan",24,"hr")
// emp1.name=55  //-- error
emp1.employeeDetails()
