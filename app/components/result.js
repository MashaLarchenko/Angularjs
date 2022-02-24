angular.module('app').component('result', {
  templateUrl: "./app/templates/views/result.html",
  controller: function ($scope, state) {
    console.log(state, 'SASL;KS')
    $scope.repoData = state.data.items;
    console.log('search', state,  $scope.repoData);

  }
})


// angular.module("result",["search"])
// var searchBar = {
//   name: 'searchBar',
//   url: '/',
//   component: 'searchBar'
// }