var app = angular.module("behaviorApp", [])

app.directive("enter", function(){
  return{
    restrict: "A"
  };
});
