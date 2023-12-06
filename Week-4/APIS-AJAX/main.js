// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })


// const Get_Data=function(data){
//     console.log(data.items[0].volumeInfo.title)
// }

// $.get("https://www.googleapis.com/books/v1/volumes?q=title: Name of the Wind.", Get_Data);


//request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
//     console.log(users)
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
//   let lastcatchp=users[users.length - 1].company.catchPhrase
//   //log the data
//   console.log(`${lat}, ${long} ${lastcatchp}`) //prints -37.3159, 81.1496
// })

// const fetch = function (isbn) {
// $.ajax({
//   method: "GET",
//   url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//   success: function (data) {
//       console.log(data);
//   },
//   error: function (xhr, text, error) {
//       console.log(text);
//   }
// }); 
// }

// fetch("9782806269171")
// fetch("1440633908 ")
// fetch("9781945048470 ")
// fetch("9780307417138 ")

// const fetchBookData = function (queryType, queryValue) {
//     let url;
  
//     if (queryType === "ISBN") {
//       url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`;
//     } else if (queryType === "title") {
//       url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryValue}`;
    
  
//     $.ajax({
//       method: "GET",
//       url: url,
//       success: function (data) {
//         console.log(data)
//         data.items.forEach(item =>{
//             const volumeinfo=item.volumeInfo
//             console.log(volumeinfo.title)
//             console.log(volumeinfo.authors ? volumeinfo.authors.join(", ") : "Author not available")
//             console.log(volumeinfo.industryIdentifiers[0].identifier)

    
//     })
//       },
//       error: function (xhr, text, error) {
//         console.log(text);
//       }
//     });
//   }
// }
  
//   // Example usage:
//   fetchBookData("ISBN", "9782806269171"); // Search by ISBN
//   fetchBookData("title", "The Little Prince");

//javascript, jQuery

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=DkXwCsnJYHKPNdrBVVJFNhTrVip6BfUx&limit=5");
// xhr.done(function(data) { 
//   var embed_url = data.data[0].embed_url;
//   console.log("success got data", data);
//   $("#giphy-iframe").attr("src", embed_url);

// });


$("#ClickHere").on("click", function() {
  // Get the user input from the input field
  var userInput = $("#input").val();

  var apiKey = "DkXwCsnJYHKPNdrBVVJFNhTrVip6BfUx";
  var apiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${apiKey}&limit=1`;
  

  $.get(apiUrl)
  .done(function(data) {
      var embed_url = data.data[0].embed_url;
      $("#giphy-iframe").attr("src", embed_url);})

})
  
