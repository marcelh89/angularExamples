'use strict'

 /* global angular */

/**
 * @ngdoc function
 * @name simpleTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTodoApp
 */
angular.module('simpleTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todoList = [
      {id: 10, label: 'cleanup', edit: false},
      {id: 555, label: 'listen to music', edit: false},
      {id: 456, label: 'play the guitar', edit: false}
    ]

    $scope.addItem = function () {
      var newTodo = $scope.newTodo

      if (newTodo) {
        console.log('addItem with label ' + $scope.newTodo)
        $scope.todoList.push({
          id: $scope.guidGenerator(),
          label: $scope.newTodo,
          edit: false
        })
        $scope.newTodo = null
      }
    }

    $scope.removeItem = function (todo) {
      console.log('removeItem with id ' + todo.id)
      $scope.todoList = $scope.todoList.filter(function (obj) {
        return obj.id !== todo.id
      })
    }

    $scope.editItem = function (todo) {
      angular.forEach($scope.todoList, function (element, key) {
        if (element.id === todo.id) {
          todo.edit = !todo.edit
        } else {
          element.edit = false
        }
      })

      console.log(todo.edit)
      console.log($scope.todoList)
    }

    $scope.guidGenerator = function () {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
    }
  })
