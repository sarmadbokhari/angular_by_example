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

app.directive('supermanclass', function(){
  return{
    restrict: "C",
    link: function(){
      alert("Here I am to save the day as a class");
    }
  };
});

app.directive('supermancomment', function(){
  return{
    restrict: "M",
    link: function(){
      alert("Here I am to save the day as a comment");
    }
  };
});

app.directive('super', function(){
  return{
    restrict: "A",
    template: "<p>I am superman attribute</p>"
    };
});

// app.directive('flash', function(){
//   return{
//     restrict: "A",
//     template: "<p>I am flash attribute</p>"
//     };
// });

// E = element
// A = attribute - DEFAULTS TO A if no restriction is applied
// C = class
// M = comment
