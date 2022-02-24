angular.module('app').component('searchBar', {
  templateUrl: "./app/templates/views/search.html",
  controller: function ( $state, $scope, gitRepoService, state) {
    console.log(state, 'state')
    this.search = function () {
      gitRepoService.getAllRepoByQuery(`https://api.github.com/search/repositories?q=${$scope.searchQuery}&page=1&per_page=20`).then(data => {
        state.data = data
        $state.go("search", { query: $scope.searchQuery, page: 1});
      });
    }
  }
})