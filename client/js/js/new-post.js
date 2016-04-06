Template.newPost.events ({
  "submit .new-post": function(event) {
    console.log(event.target.title.value, event.target.content.value);
    event.preventDefault();
  }
});
