


///*******************Ex1****************************//
let counter=0
let txt=$("<input>").attr({
  type: "text",
  placeholder: "Human Name",
  id: "nameInput"
});

$("<label>").append(txt)
$("body").append(txt);

$("body").append("<button id='but'> Add Human</button>")

$("#but").click(function(){
  var liID = "listItem" + counter;
  $("body").append("<li id='" + liID + "'>"+$("#nameInput").val()+"</li>")
  counter++
})

$("li").click(function(){

  $("#" + liID).remove("#" + liID);
})

///*******************Ex2****************************//

$("body").append("<div class='box'></div>")
$("body").append("<div class='box'></div>")
$(".box").hover(function(){
  $(this).css("background", "red")}
, 
  function(){
    $(this).css("background", "purple")
  }  
)


/*******************Ex3****************************//

$("#cart").append(
  
  "<li>Do not change any of the HTML/CSS</li>" ,
  "<li>Only items that are in stock (based off the data attribute) should be clickable</li> " ,
  "<li>You should add the clicked item to the #cart</li>")
  $("#items .item").click(function(){
    if($(this).data("instock")){
    $("body").append("<div>"+$(this).text()+"</div>")
    }
  })

  ///*******************Ex4****************************//

  const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]
 
  for(fruit of fruits){
    $("body").append("<div class='"+ fruit.color+"'>"+ fruit.name+"</div>")
  }


    ///*******************Ex5****************************//
    $("span").text()
    $(".picker").text("")