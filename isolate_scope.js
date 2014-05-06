var app = angular.module("taskApp", []);

app.directive("person", function(){
  return {
    restrict: "E",
    // this isolates the scope
    scope:{},
    template: '<input type="text" ng-model="task">{{ task }}'
  };
});

