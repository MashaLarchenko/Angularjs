angular.module('app').component('searchBar', {
  templateUrl: "./app/templates/views/search.html",
  controller: function ( $state, $scope, gitRepoService, state) {
    this.search = function () {
      state.query = $scope.searchQuery;
      gitRepoService.getAllRepoByQuery(`https://api.github.com/search/repositories?q=${$scope.searchQuery}&page=1&per_page=20`).then(data => {
        state.data = data
        state.total = data.total_count / 20;
        state.query = $scope.searchQuery;
        $state.go("search", { query: $scope.searchQuery, page: 1});
      });
    }
  }
})