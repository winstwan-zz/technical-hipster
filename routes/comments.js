module.exports = function (poet, app, comments) {
  poet.addRoute('/comments/:comment_resource', function (req, res, next) {
    // comments are saved under the resource name of post.url
    var post = poet.helpers.getPost(req.params.comment_resource);
    var properties_to_fetch = {
      _id: true,
      author: true,
      date: true,
      message: true
    };

    if (post) {
      comments.getComments(post.url, properties_to_fetch, function (error, results) {
        if (error) {
          console.log('get comments fail: ' + error);
          res.send(404);
        } else {
          results.toArray(function (err, docs) {
            if (err) {
              console.log('mongo cursor to array fail: ' + err);
              res.send(404);
            } else {
              app.render('includes/comments', { comments: docs }, function (err, html) {
                if (err) {
                  console.log('HTML/Jade rendering fail: ' + err);
                  res.send(404);
                } else {
                  res.json({html: html});
                }
              });
            }
          });
        }
      });
    } else {
      console.log('post path fail');
      res.send(404);
    }
  });
};
