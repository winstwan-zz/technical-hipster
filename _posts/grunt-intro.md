![grunt logo](http://raddevon.com/storage/cache/images/000/036/grunt-logo,large.png?1374764065)

Once you've done something boring once, don't ever do it again right?  Why would a good technical hipster spend time repeating themselves and writing boilerplate code when they could focus on building the new hotness?  [Grunt](http://gruntjs.com/) is here to help.  Grunt is a javascript task runner that will take a lot of the boring out of your day job.  From the fine people over at [Grunt](http://gruntjs.com/):

> The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

[Grunt](http://gruntjs.com/) is basically winning the task runner battle and is quickly becoming the industry standard.  All the coolest kids on the block are using it and so should you.  

### What does it do?
In short, [Grunt](http://gruntjs.com/) is pretty much a one stop shop for all things automatable in the hipster's web development life.  A full listing of the wide variety of things that [Grunt](http://gruntjs.com/) can remove from your cognitive load can be found at [gruntjs.com/plugins](http://gruntjs.com/plugins).  Take a look at that and see if anything strikes your fancy. 

### Let's use it!
Cool, you're back.  Let's build a little demo project to start grunting like a boss.  [Previously](http://www.technicalhipster.com/post/bower-intro), we took a look at [Bower](http://bower.io/), a package manager from Twitter for all of your obscure git package needs.  One of the drawbacks of bower is that it does not take a stance on what to do once you've got all of your sweet interwebs stuff in place.  Grunt will help you assemble all of that sweetness into a single file thats a little more usefull than a bunch of individual scripts.  Bower requires a **bower.json** file to tell it what to install in your project.  Let's give it one! Make a working directory for the project using `mkdir grunt_intro` and place the following **bower.json** in the created directory

```
{
  "name": "grunt_intro",
  "version": "0.0.0",
  "authors": [
    "Corey Flynn"
  ],
  "description": "grunt grunt grunt",
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "backbone": "~1.1.0",
    "bootstrap": "~3.0.0",
    "underscore": "~1.5.2",
    "d3": "~3.3.8"
  }
}
```
using `bower install` with that file in the directory will pull down all the components we are going to assemble into a single javascript file using grunt.  You do have bower installed right?  Once you've run `bower install`, you'll notice that there is a new directory called `bower_components` in your project directory.  We're going to use grunt to scrape these bad boys.