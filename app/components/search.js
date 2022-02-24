angular.module('app').component('searchBar', {
  templateUrl: "./app/templates/views/search.html",
  bindings: {
    repoData: '='
  },
  controller: function ($scope, gitRepoService, $location, state) {
    console.log('STATE', state)
    this.search = function () {
      gitRepoService.getAllRepoByQuery(`https://api.github.com/search/repositories?q=${$scope.searchQuery}&page=1&per_page=20`).then(data => {
        state.data = data
        $location.path("result");
        console.log('in rwg', state.data);
      });
    }
  }
})