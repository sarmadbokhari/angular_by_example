var app = angular.module("behaviorApp", []);

app.directive("enter1", function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      element.addClass("panel");
    });
  };
});

app.directive("leave1", function(){
  return function(scope, element){
    element.bind("mouseleave", function(){
      element.removeClass("panel");
    });
  };
});


app.directive("enter2", function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      element.addClass(attrs.enter2);
    });
  };
});

app.directive("leave2", function(){
  return function(scope, element, attrs){
    element.bind("mouseleave", function(){
      element.removeClass(attrs.enter2);
    });
  };
});
