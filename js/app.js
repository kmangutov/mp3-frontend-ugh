// var demoApp = angular.module('demoApp', ['demoControllers']);

var demoApp = angular.module('demoApp', ['ngRoute', 'demoControllers', 'demoServices']);

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/usersView', {
    templateUrl: 'partials/usersView.html',
    controller: 'UsersViewController'
  }).
  when('/tasksView', {
    templateUrl: 'partials/tasksView.html',
    controller: 'TasksViewController'
  }).
  when('/userDetail/:_id', {
    templateUrl: 'partials/userDetail.html',
    controller: 'UserDetailController'
  }).
  when('/taskDetail', {
    templateUrl: 'partials/taskDetail.html',
    controller: 'TaskDetailController'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/addUserView', {
    templateUrl: 'partials/addUserView.html',
    controller: 'AddUserController'
  }).
  otherwise({
    redirectTo: '/settings'
  });
}]);