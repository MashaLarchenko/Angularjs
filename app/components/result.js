angular.module('app').component('result', {
  templateUrl: "./app/templates/views/result.html",
  controller: function ($state, $scope, state) {
    $scope.repoData = state.data.items;

    this.cardClick = function (data) {
      state.authorData = data;
      $state.go("author", { authorName: state.authorData.login});
      console.log(data, 'DATA', state);
    }
  }
})
