angular.module('app').component('result', {
  templateUrl: "./app/templates/views/result.html",
  controller: function ($state, $scope, gitRepoService, state) {
    $scope.repoData = state.data.items;

    this.cardClick = function (data) {
      state.authorData = data;
      $state.go("author", { authorName: state.authorData.login});
      console.log(data, 'DATA', state);
    }

    this.search = function () {
      console.log('click')
      gitRepoService.getAllRepoByQuery(`https://api.github.com/search/repositories?q=${$scope.searchQuery}&page=1&per_page=20`).then(data => {
        state.data = data
        $state.go("search", { query: $scope.searchQuery, page: 1});
      });
    }
  }
})
