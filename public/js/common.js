$(function() {

  var colorClasses = [ 'blue', 'green', 'orange', 'red', 'black' ];

  $('body').addClass(colorClasses[Math.floor(Math.random() * colorClasses.length)]);

});