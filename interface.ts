interface Student
{
    name:string;
    age:number;
    height?:string;
}

const s1:Student={
    name:"Godarshan",
    age:22
}
console.log(`Student name is ${s1.name}, Age is ${s1.age}`)
const s2:Student={
    name:"Reddy",
    age:22,
    height:"176"
}
console.log(`Student name is ${s2.name}, Age is ${s2.age} And hieght is ${s2.height}`)

interface Player extends Student{
    playerId:string;

}
const p1:Player={
    name:"Sudharshan",
    age:25,
    playerId:"2000ESR"
}
console.log(`player name is ${p1.name} age is ${p1.age} and player Id is ${p1.playerId}`)
