
//***************************************************Callback********************************************************//
// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }




// const first = function (callback) {
//   setTimeout(function () {
//       console.log("should be first")
//       callback()
//   }, 3000)
// }

// const second = function () {
//   console.log("should be second")
// }

// first(second)
// getData(displayData)


// setInterval( function(){
//   console.log(new Date())
// }
//   , 1000)


//**************************************************Arrow function***************************************************************//

const greet = name => console.log("Hello there, " + name)
const square=num=>(console.log(num*num))

const getFormalTitle=(name, text)=>name+" "+text
square(2)
greet("Jolene") //prints "Hello there, Jolene"
console.log(getFormalTitle('Saber','Elsayed'))

const PushPull=(func)=>func()
const func=()=>(console.log("pushing it!"))
PushPull(func)

const time = new Date()
const RetunrTime=(time)=>(console.log("The current time is:"+time))
const GetTime=(RetunrTime)=>RetunrTime(time)
GetTime(RetunrTime)

