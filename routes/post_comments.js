module.exports = function (poet, express, app, comments, _) {
  // generate all POST routing for each blog post
  _.each(poet.posts, function (post, index, array) {
    app.post(post.url, [express.json(), express.urlencoded()],  function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      var message = req.body.message;

      var comment = {
        date: new Date(),
        author: username,
        message: message // careful, escaping of dangerous content happens at the view/Jade level
      };

      // check username and password
      if (password == 'yuk') {
        comments.saveComment(post.url, comment, function (error, comment, action) {
          if (error) {
            console.log('comment failed');
          } else {
            console.log('comment saved');
          }
        });
      }

      // non-AJAX support for now: return to post page no matter what
      res.redirect(post.url);  
    });
  });
};
