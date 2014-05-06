var app = angular.module("taskApp", []);

app.controller('TaskCtrl', function($scope){
  $scope.logTask = function(task){
    alert(task + " is done!");
  };
});

app.directive("person", function(){
  return {
    restrict: "E",
    // this isolates the scope
    scope:{
      done: "&"
    },
    template: '<input type="text" ng-model="task">{{ task }} <div class="button" ng-click="done({task:task})">Task completed</div>'
  };
});

