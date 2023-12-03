
const Render=function(Posts){
    function pushToPostsArray(name, text) {
        // Create a new post object
        let newPost = {
         // Assuming you have an ID logic, increment for a new post
          name: name,
          text: text
        };
    
        // Push the new post object to the posts array
        Posts.push(newPost);
        console.log(Posts[0].name)
    

    Posts.forEach(function(Posts) {
        var postDiv = $('<div class="post">');
        postDiv.text('Name: ' + Posts.name + ', Text: ' + Posts.text);
        $('body').append(postDiv);
      });
    
     
}
return{pushToPostsArray}
}

