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
      name: 'search',
      url: '/search?query&page',
      params: {
        query: '',
        page: '' ,
      },
      component: 'result'
    }

    var authorState = {
      name: 'author',
      url: '/author?authorName',
      params: {
        authorName: '',
      },
      component: 'author'
    }

    $stateProvider.state(resultState);
    $stateProvider.state(homeState);
    $stateProvider.state(authorState);
  }]);

  myApp.factory('state', function () {
    return {
      data: '',
    }
  })