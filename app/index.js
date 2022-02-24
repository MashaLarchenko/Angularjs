var myApp = angular.module('app', ['ui.router']);

myApp
  .controller('appCtrl', function ($scope) {
    $scope.repoData = [];
  })
  .component('app', {
    controller: 'appCtrl'
  })
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    var homeState = {
      name: 'searchBar',
      url: '/',
      component: 'searchBar',
    }

    var resultState = {
      name: 'result',
      url: '/result',
      component: 'result'

    }

    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(resultState);
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
  }]);

  myApp.factory('state', function () {
    return {
      data: '',
    }
  })