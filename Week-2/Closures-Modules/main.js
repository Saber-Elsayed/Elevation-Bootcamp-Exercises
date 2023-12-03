// const createPerson = function(name, age){
//   const person = {
//       personName: name, 
//       personAge: age
//   }

//   return person
// }

// createPerson("Elon", 42)
// console.log(person)

const foo = function () {
  const x = 1

  const bar = function () {
    console.log(x) //notice this inner function using the outer function's variable
  }

  return bar
}

const baz = foo() //out here, x doesn't exist
baz() //but when we invoke baz, we're printing x!



const setCounter = function (num) {
  let counter = 0

  const count = function () {
    counter += num;
    console.log(counter)
  }

  return count
}

const increment = setCounter(2)
increment()

const Family=function(){
  const memmbers=[];
  const Birth=function(name){
      memmbers.push(name)
      console.log(memmbers)
  }
  return Birth
}
let giveBirth =Family()
giveBirth("Mezal tov!")
giveBirth("Hello World")



const mathOperations = function () {
  const add = function (x, y) {
      return x + y;
  }

  const subtract = function (x, y) {
      return x - y;
  }

  const multiply = function (x, y) {
      return x * y;
  }

  const divide = function (x, y) {
      return x / y;
  }

  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
}
}
console.log(mathOperations().mult(1.75,24))
console.log(mathOperations().add(13,9))
console.log(mathOperations().mult(7,mathOperations().mult(36,6)))




const UsersModule = function () {
  const _users = ['Aaron', 'Avi'];

  const addUser = function (user) {
      _users.push(user)
  }

  const listUsers = function () {
      for (let user of _users) {
          console.log(user)
      }
  }

  return {
      addUser: addUser,
      listUsers: listUsers
  }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('Saber')
usersModule.addUser('Ahmed')
usersModule.listUsers();


const StringFormatter=function(){
  const capitalizeFirst =function(str){
    return str.replace("h","H")
  }

  const toSkewerCase  =function(str){
        return str.replace(/ /g, '-')
  }
  return{
    capitalizeFirst:capitalizeFirst,
    toSkewerCase:toSkewerCase
  }

} 
const obj=StringFormatter()
console.log(obj.capitalizeFirst("Hello"))
console.log(obj.toSkewerCase("Hello World"))

const Bank=function(){
  let balance=500
  const depositCash =function(money){
      balance+=money
     
  }
  const checkBalance =function(){
    return balance
  }
  return{
    deposit:depositCash,
    showBalance:checkBalance
  }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
console.log(bank.showBalance()) //should print 950