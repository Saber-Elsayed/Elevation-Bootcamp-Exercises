const fetchBookData = function () {
  let input = $("#book-input").val();
  console.log(input);
  $.get(`books/${input}`, function (bookData) {
    $("body").append(`<div>${bookData.title} - ${bookData.author}`);
    console.log(bookData);
  });
};
