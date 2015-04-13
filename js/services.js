// js/services/todos.js
angular.module('demoServices', [])
    .factory('CommonData', function(){
        var data = "http://www.uiucwp.com:4000";
        return{
            getData : function(){
                return data;
            },
            setData : function(newData){
                data = newData;                
            }
        }
    })
    .factory('Llamas', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get(baseUrl+'/api/llamas');
            }
        }
    })
    .factory('UserService', ['$http', 'CommonData', function($http, CommonData) {

        return {
            get: function() {

                console.log("enter UsersService::get");
                return $http.get(CommonData.getData() + '/api/users/');
            },

            getById: function(id) {

                console.log("enter UsersService::getById");
                return $http.get(CommonData.getData() + '/api/users/' + id);       
            },

            post: function(data) {

                console.log("enter UserService::post");
                return $http.post(CommonData.getData() + '/api/users', data);
            },

            put: function(id, data) {

                return $http.put(CommonData.getData() + '/api/users/' + id, data);
            },

            delete: function(id) {

                return $http.delete(CommonData.getData() + '/api/users/' + id);
            }
        }
    }])
    .factory('TaskService', ['$http', 'CommonData', function($http, CommonData) {

        return {
            get: function(query) {

                query = query===undefined?"":query;


                console.log("enter TaskService::get");
                return $http.get(CommonData.getData() + '/api/tasks' + query);
            },

            getById: function(id) {

                console.log("enter TaskService::getById");
                return $http.get(CommonData.getData() + '/api/tasks/' + id);       
            },

            post: function(data) {

                console.log("enter TaskService::post");
                return $http.post(CommonData.getData() + '/api/tasks', data);
            },

            put: function(id, data) {

                return $http.put(CommonData.getData() + '/api/tasks/' + id, data);
            },

            delete: function(id) {

                return $http.delete(CommonData.getData() + '/api/tasks/' + id);
            }
        }
    }])