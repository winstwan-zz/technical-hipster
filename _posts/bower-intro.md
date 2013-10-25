{{{
  "title"    : "Build Better with Bower",
  "author"   : "PrideAndCorey",
  "tags"     : [ "bower"],
  "category" : "Tutorials",
  "date"     : "10-25-2013"
}}}

![bowerbird](http://www.duskyswondersite.com/wp-content/uploads/2010/04/bowerbird-5-vogal.jpg)

Ever heard of bowerbirds?  They are one nature's sweetest builders, constantly on the lookout for the latest and greatest thing to add to their nest.  Adding the newest piece of bling to their abode can mean a huge payoff.  That picture above is an example of a bower's domicile, all the right stuff just where and when he needs it.

Twitter's [bower](http://bower.io/) is a package manager for the web that allows us to keep adding the latest and greatest bling to our project.  Bower lets us grab stuff from the web when and where we need it.  Gone are the days of maintaining your own library of bells and wistles (internal and external code) and porting that bad boy from project to project.  

## Let's dive in!
First things first, install node and npm.  Do you have that installed?  I'll assume that you do since you are leading edge technical hipster.  For those of you that didn't bring your skinny jeans today, you can catch up by heading over to [nodejs.org](http://nodejs.org/) and jamming on that install button.  Once you've got that done, install bower globally using

```
npm install -g bower
```

that will let you run bower anywhere on your machine.  Now, lets see what this little bird can do.  Bower finds useful things on the internet that you may want to pull into your project and keeps them neat and tidy once you bring them in.  The internet is a big place though and maybe you don't know where to tell bower to look for the new hotness that needs to go in your project.  The little guy has got you covered.  The first thing you should do is search the interwebs with bower looking for stuff you might want to use.  For example 

```
bower search 
```

will get you a listing of all the stuff bower can find and

```
bower search jquery
```

will get you a listing of all of the jquery packages bower can find.  This should look familiar to those hipsters who have been hand building their own fixed geared linux boxes for years because it works in a similiar vein to apt-cache search.  You'll notice, that there are a lot of jquery related packages out there, including jquery itself. The listing looks like the following

![holy packages!](/images/posts/bower_intro/bower_search_jquery.png)

In addition to the depth of packages bower can find, the fact that all of those packages are backed by git repos should jump right out to you.  This is pretty sweet, but what does it really mean?  All bower packages are pulled from publically available repositories that are curated and updated by real developers out there in the wild.  I certainly trust that the guys developing a given library care more about maintaining it than I do.  Bower lets you find the most up to date version of stuff out there on the web.  Sweet!

## let's build something
Ok, that's cool, but lots of stuff looks cool on the surface.  Let's build something to kick the tires a bit.  First thing first.  Let's make a clean folder to hold our project and move to it.

```
mkdir bower_tut;cd bower_tut
```

We're going to build a nice little page using bootstrap, so let's use bower to go and grab bootstrap

```
bower install bootstrap
```

That causes our little bird to head out into the wild and come back with just the right bits needed to use bootstrap and its css.  the process looks like the following in your terminal

![thanks for the bootstrap little guy](/images/posts/bower_intro/bower_install_bootstrap.png)

Now we can look at what bower did for us using `bower list`

![what? where did that jquery come from](/images/posts/bower_intro/bower_list.png)

Here's that coolest part.  Bootstrap relies on jquery, so bower went ahead and grabbed it along with the other stuff.  That means you can focus on your top level dependencies and not have to worry about the guts of what those dependencies require themselves.

### an aside about installing packages
Installing things one at a time is all well and good, but what if we want to install things in one shot?  Bower allows you to provide a **bower.json** that defines all the dependencies required for your project.  To start one, run `bower init` in your project's directory and it will ask you some questions.  From there, just run `bower install <package_name> --save` to store the packages in your **bower.json** file.  Running `bower install` in a directory with a **bower.json** file will just install all of the things in the dependencies.  For example, running `bower install` with the following **bower,json** file in your directory installs [backbone](http://backbonejs.org/), [bootstrap](http://getbootstrap.com/), [jquery](http://jquery.com/), [d3](http://d3js.org/), and [underscore](http://underscorejs.org/)

```json
{
  "name": "bower_tut",
  "version": "0.0.0",
  "authors": [
    "Corey Flynn <flynn.corey@gmail.com>"
  ],
  "description": "short and sweet bower tutorial",
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

### using packages
Bower puts things in your project directory in a standard format.  That format varies from package to package, but it is at least consistent every time.  In order to use packages, you will need to pull them into your project or page directly.  For example:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Built with Bower</title>
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
	<div class="jumbotron">
	  <div class="container">
	    <h1>Hello, world!</h1>
	    <p>built with Bower and Bootsrap</p>
	  </div>
	</div>
	<div class="row">
		<img src="http://bower.io/img/bower-logo.png" class="img-responsive col-md-offset-1 col-md-10">
	</div>
</body>
</html>
```

gives you this cute little guy

![what a sweet site](/images/posts/bower_intro/Built_with_Bower.png)

### Seems complicated...
So, this is cool and all, but what happens when you built a larger project with many dependencies?  How does Bower help you manage that complexity?  It doesn't.  In the words of Twitter

> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

In other words, Bower does one thing and one thing only.  Find and manage packages from the web.  It does not dictate what you do with them once you have them.  For that, check out [Grunt](http://gruntjs.com/).  Grunt will be the subject of a future post, but for now just know that there are some pretty smart people who have thought about this problem and many common things essentially solved.

## A few other useful commands
Bower not only allows you to install things with `bower install`, but it allows you to keep your packages up to date with `bower update`.  Just like we can install things, we can remove 'em with `bower remove`.  