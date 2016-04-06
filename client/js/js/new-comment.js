Template.newComment.events ({
  "submit .new-comment": function(event) {
    console.log(event.target.content.value);
    event.preventDefault();
  }
});
