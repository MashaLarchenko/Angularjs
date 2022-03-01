angular.module('app').component('author', {
  templateUrl: './app/templates/views/author.html',
  controller($scope, state) {
    $scope.authorData = state.authorData;
  },
});
