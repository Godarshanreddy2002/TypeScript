class Student
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
    
    StudentDetails():void
    {
        console.log(`Student name is ${this.name} age is ${this.age} and dependent is ${this.dept} `)
    }
}

class Player extends Student{

    playerId:string;

    constructor(playerId:string,name:string,age:number,dept:string)
    {
        super(name,age,dept)
        this.playerId=playerId
        
    }
     playerDetails():void
    {
        console.log(`player name is ${this.name}  ID is ${this.playerId} and dependent is ${this.dept} `)
    }
}
const emp1=new Player("1001","sudharshan",24,"hr")
emp1.StudentDetails();

emp1.playerDetails()

/**o/p:[LOG]: "Student name is sudharshan age is 24 and dependent is hr " 
[LOG]: "player name is sudharshan  ID is 1001 and dependent is hr " 
  */
