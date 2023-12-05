// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })


// const Get_Data=function(data){
//     console.log(data.items[0].volumeInfo.title)
// }

// $.get("https://www.googleapis.com/books/v1/volumes?q=title: Name of the Wind.", Get_Data);


//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function(users){
  //extract the geo data of the first user
    console.log(users)
  let lat = users[0].address.geo.lat
  let long = users[0].address.geo.lng
  let lastcatchp=users[users.length - 1].company.catchPhrase
  //log the data
  console.log(`${lat}, ${long} ${lastcatchp}`) //prints -37.3159, 81.1496
})

const fetch = function () {
$.ajax({
  method: "GET",
  url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
  success: function (data) {
      console.log(data);
  },
  error: function (xhr, text, error) {
      console.log(text);
  }
}); 
}