var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope){
  // this is how it essentially works, but this is unnecessary
  // $scope.ctrlFlavor = 'blackberry';
});

app.directive("drink", function(){
  return {
    template: "<div>{{ flavor }}</div>",
    link: function(scope, element, attrs){
      scope.flavor = attrs.flavor;
    }
  };
});

app.directive("food", function(){
  return {
    scope: {
      style: "@"
    },
    template: "<div>{{ style }}</div>",
  };
});
