$(function() {

  var colorClasses = [ 'blue', 'green', 'orange', 'red', 'purple' ];

  $('body').addClass(colorClasses[Math.floor(Math.random() * colorClasses.length)]);

});
