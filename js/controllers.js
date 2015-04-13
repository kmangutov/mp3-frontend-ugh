var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('UsersViewController', ['$location', '$scope', 'CommonData', 'UserService', 
  function($location, $scope, CommonData, UserService) {
    
    $scope.displayText = ""

    UserService.get().success(function(data) {

      $scope.users = data.data;
      $location.path("/usersView")
    });

    $scope.go = function(id) {

      console.log("UsersViewController::go " + id);
      $location.path("/userDetail/" + id);
    }

    $scope.delete = function(id) {

      UserService.delete(id).error(function(data) {

        $scope.text = "lol an error " + JSON.stringify(data);
      }).success(function(f) {
        UserService.get().success(function(data) {

              $scope.users = data.data;
        });   
      });
    }
}] );

demoControllers.controller('TasksViewController', ['TaskService', '$scope', 'CommonData' , function(TaskService, $scope, CommonData) {
  $scope.data = "";

  TaskService.get().success(function(data) {
    $scope.data = data;
  });

}]);

demoControllers.controller('UserDetailController', ['UserService', 'TaskService', '$routeParams', '$scope', 'CommonData' , function(UserService, TaskService, $routeParams, $scope, CommonData) {
  //TODO: add $routeParams, use $routeParams.id to get id

    UserService.getById($routeParams._id).success(function(data) {

      console.log(JSON.stringify(data));
      $scope.user = data.data;

      //$scope.tasks = $scope.user.pendingTasks;

      /*var params = "?where={_id:{$in:[" + $scope.user.pendingTasks + "]}}";

      TaskService.get(params).success(function(dtasks) {

        tasks = dtasks.data;
        $scope.tasks = tasks;
      })fuck*/

      console.log($scope.user.pendingTasks);
      $scope.tasks = [];

      $scope.user.pendingTasks.forEach(function(taskId) {
        TaskService.getById(taskId).success(function(task) {
          $scope.tasks.push(task);
        });
      });

    });

}]);

demoControllers.controller('TaskDetailController', ['$scope', 'CommonData' , function($scope, CommonData) {
  //TODO: add $routeParams, use $routeParams.id to get id

  $scope.data = "TaskDetailController";
}]);


demoControllers.controller('AddUserController', ['$location', '$scope', 'CommonData' , 'UserService',function($location, $scope, CommonData, UserService) {
  //TODO: add $routeParams, use $routeParams.id to get id

  $scope.text = "TaskDetailController";

  $scope.add = function() {

    console.log("in add");
    UserService.post({
      email: $scope.email,
      name: $scope.name
    }).success(function(data) {
      $scope.text = "Great it worked lol";
      $location.path("/usersView")
    }).error(function(data) {

      $scope.text = "lol an error " + JSON.stringify(data);
    });
  }
}]);



demoControllers.controller('SettingsController', ['$scope', 'CommonData', '$window', function($scope, CommonData, $window) {

  $scope.setUrl = function(){
    CommonData.setData($scope.url);
    $scope.displayText = "URL set " + $scope.url;

  };
}]);


