{{{
  "title"    : "So You Want To Do This \"Blog\" Thing",
  "author"   : "WinsterIsComing",
  "tags"     : [ "tutorial", "poet" ],
  "category" : "tutorials",
  "date"     : "8-31-2013"
}}}

Technical Hipster uses the following stack of tools:

- [poet](http://jsantell.github.io/poet/), a lightweight blogging platform so fresh that docs are barely up to date [#beforeitscool](http://www.quickmeme.com/meme/362nlv/)
- using [jade](http://jade-lang.com/) and [markdown](http://daringfireball.net/projects/markdown/) for HTML brevity
- poet runs on [express](http://expressjs.com/)
- which is all [no(duh!).js](http://nodejs.org/)
- graciously hosted by [nodejitsu](https://www.nodejitsu.com/), for a price, of course

Here's how you, too, can share your evangelic attitude about being too cool for school:

<!--more-->

Guide for Publishing/Developing on this Blog
--------------------------------------------

1. Get the code from [github](https://github.com/winstwan/technical-hipster).

1. Get all your cool package friends in one place.
  ```
  npm install
  ```

1. Read the docs for [poet](http://jsantell.github.io/poet/). Write your new article with jade and/or markdown in the `./_posts/` directory.

1. Double-check that the site renders locally.  One of poet's major downfalls that I've noticed is that one bad article can prevent the site from loading.
  ```
  node server   # should launch development server at localhost:3000/
  ```
  
1. Set up a remote branch name for github, if you haven't already.
  ```
  git remote add origin https://github.com/winstwan/technical-hipster
  ```

1. Push changes to github.
  ```
  git add <file1.txt> <file2.txt> ...
  git commit -m "My informative comment here"
  git push <local-branch-name> <remote-branch-name>
  ```

1. Enjoy!

