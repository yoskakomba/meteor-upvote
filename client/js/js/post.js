Template.post.helpers({
  comments: function() {
    return [{
      numUpvotes: 1000,
      username: "Curtis",
      commentText: "This is awesome!"
    },
    {
      numUpvotes: 2000,
      username: "Quack",
      commentText: "This is really awesome!"

    }]
  },
  post: function() {
    return {
      numUpvotes: 1000,
      title: "Really Popular"
    }
  }
})
