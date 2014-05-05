var app = angular.module('superhero', []);

app.directive('supermanelement', function(){
  return{
    restrict: "E",
    template: "<div>Here I am to save the day as an element</div>"
  };
});

app.directive('supermanattribute', function(){
  return{
    restrict: "A",
    link: function(){
      alert("Here I am to save the day as an attribute");
    }
  };
});

// E = element
// A = attribute
// C = class
