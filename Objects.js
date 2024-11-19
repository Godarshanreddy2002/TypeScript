
const apple:{color:string,price:number,discount:boolean}=
{
    color:"red",
    price:150,
    // price:"one fifty" //---error
    discount:true
}
console.log(apple)
apple.color="green";
console.log(apple.color)


// ---------------------------------------------------cut---
type fruitType={color:string, price:number, discount:boolean}
// type fruitType={color:string, price:string|number,discount:boolean}

const mango:fruitType={
    color:"yello",
    price:80,
    discount:true
}

const kiwi:fruitType={
    color:"green",
    price:180,
    discount:true
}

console.log(kiwi)
console.log(mango)





/**
output:-
[LOG]: {
  "color": "red",
  "price": 150,
  "discount": true
} 
[LOG]: "green" 
[LOG]: {
  "color": "green",
  "price": 180,
  "discount": true
} 
[LOG]: {
  "color": "yello",
  "price": 80,
  "discount": true
} 
*/
