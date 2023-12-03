const render=Render(Posts)
$("#Submit").click(function(){
     let nameValue = $('#Name').val();
     let textValue = $('#Birthdaywish').val();
     render.pushToPostsArray(nameValue, textValue )
})