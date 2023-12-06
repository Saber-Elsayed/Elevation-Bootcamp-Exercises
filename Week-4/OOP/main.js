// class Animal {
//     constructor(name, numLegs, children) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children=[]

//     }
     

// giveBirth(name){
//     this.children.push(name)
// }
// }



// class Human{
//     constructor(name, age, isFriendly,children ){
//             this.age=age
//             this.name=name
//             this.isFriendly=isFriendly
//     }   
// }


// class Vehicle{
//     static carsSold=0
//     constructor(x, y, speed, fuel) {
//         this.x=x
//         this.y=y
//         this.spped=speed
//         Vehicle.carsSold++;
//         this.fuel=fuel
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney(){
//         console.log(this.carsSold*30000)
//     }
//     get fuel(){
//         return this.fuel
//     }
//     set fuel(ful){
 
//             if(this.fuel>0 && this.fuel<150){
//                 this.fuel=ful
//             }
//     }
    
// }



// const h1=new Human("Saber", 23, true)
// console.log(`${h1.name}, who is ${h1.age} years old, is ${h1.isFriendly ? 'friendly' : 'not friendly'}`) //prints "Mark, who is 31 years old, is friendly"
// const cat=new Animal()
// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿
// const ve1l=new Vehicle(3,4,100,100)
// const vel2=new Vehicle(3,4,100,99)
// const vel3=new Vehicle(3,4,100,22)
// ve1l.fuel()
// ve1l.fuel(100)
// Vehicle.getInfo()
// Vehicle.calculateMoney()


class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}


class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

class Teacher extends Person{
    constructor(name, startyear, salary){
        super(name, startyear)
        this.salary=salary
       super.courses={}
    }

    giveGrade(Student, cname, grade){
        Student.receiveGrade(cname, grade)

    }
    addCourse(course) {
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[course]=1
    }
}

// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)


// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


// ************Ex***************////

class Principal{
    constructor(){
        this.teachers=[]
        this.students=[]
    }
    hireTeacher(teacher){
        this.teachers.push(teacher)
    }
    recruitStudent (student){
        this.students.push(student)
    }
    expelStudent(student){
        this.students=this.students.filter(st=>st!==student)
    }
    transferStudent(student, principal){
            this.expelStudent(student)
    }
} 


const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron