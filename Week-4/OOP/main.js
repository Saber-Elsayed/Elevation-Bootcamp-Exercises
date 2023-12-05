class Animal {
    constructor(name, numLegs, children) {
        this.name = name
        this.numLegs = numLegs
        this.children=[]

    }
     

giveBirth(name){
    this.children.push(name)
}
}



class Human{
    constructor(name, age, isFriendly,children ){
            this.age=age
            this.name=name
            this.isFriendly=isFriendly
    }   
}


class Vehicle{
    static carsSold=0
    constructor(x, y, speed, fuel) {
        this.x=x
        this.y=y
        this.spped=speed
        Vehicle.carsSold++;
        this.fuel=fuel
    }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        console.log(this.carsSold*30000)
    }
    get fuel(){
        return this.fuel
    }
    set fuel(ful){
 
            if(this.fuel>0 && this.fuel<150){
                this.fuel=ful
            }
    }
    
}



const h1=new Human("Saber", 23, true)
console.log(`${h1.name}, who is ${h1.age} years old, is ${h1.isFriendly ? 'friendly' : 'not friendly'}`) //prints "Mark, who is 31 years old, is friendly"
const cat=new Animal()
cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿
const ve1l=new Vehicle(3,4,100,100)
const vel2=new Vehicle(3,4,100,99)
const vel3=new Vehicle(3,4,100,22)
ve1l.fuel()
ve1l.fuel(100)
Vehicle.getInfo()
Vehicle.calculateMoney()