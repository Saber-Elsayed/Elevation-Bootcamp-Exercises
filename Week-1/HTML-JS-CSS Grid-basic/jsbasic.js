console.log("hello");
console.log("Hello to our sttaf!!!");
let x=10;
for(x=2;x<20;x++){
    console.log(x+1);
}

const multply=function(x, y=2){
    console.log(x*y)
}
multply(1)


const person = {
    name: "Julius",
    speak: function(str) {
      console.log("I like "+str)
    }
  }
  person.speak("cheese toast")


  function isEven(num){
    if(num%2==0){
        //console.log("Number is even!!!");

    }
    else{
        console.log("The number is: "+num);
    }
  }
  isEven(3);

  function AllOdds(arr){
    for(i=0;i<arr.length;i++){
        isEven(arr[i]);
    }

  }
  let arr=[1,2,3,4,5,6,7,8,9];
  AllOdds(arr);

  function Find_Number(arr, num){
    for(i=0;i<arr.length;i++){
        if(arr[i]==num){
            return true;
        }
       
    }
    return false;
  }
  let arr2=[1,2,3,4,5];
  console.log(Find_Number(arr2,3));

  const calculator={
    add: function(num1, num2){
      return num1+num2;
    },

    subtract: function(num1, num2){
        return num1-num2;
    }
  }

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42







