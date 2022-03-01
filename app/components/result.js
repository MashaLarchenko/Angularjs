angular.module('app').component('result', {
  templateUrl: "./app/templates/views/result.html",
  controller: function ($state, $scope, gitRepoService, state) {
    $scope.repoData = state.data.items;
    $scope.page = +state.page;
    $scope.query = '';

    this.cardClick = function (data) {
      state.authorData = data;
      $state.go("author", { authorName: state.authorData.login });
      console.log(data, 'DATA', state);
    }

    this.getDataFromApi = function () {
      gitRepoService.getAllRepoByQuery(`https://api.github.com/search/repositories?q=${$scope.query}&page=${$scope.page}&per_page=20`).then(data => {
        state.data = data;
        state.total = data.total_count / 20;

        $state.go("search", { query: $scope.query, page: $scope.page });
      });
    }

    this.search = function () {
      $scope.page = 1;
      state.query = $scope.searchQuery;
      $scope.query = $scope.searchQuery;
      this.getDataFromApi();

      state.page = $scope.page;
    }

    this.getNextPage = function () {
      if ($scope.page < state.total) {
        $scope.page += 1;
        state.page = $scope.page;
        $scope.query = state.query;
        this.getDataFromApi();
      }
    }


    this.getPrevPage = function () {
      if (state.page !== 1) {
        $scope.page -= 1;
        state.page = $scope.page;
        $scope.query = state.query;

        this.getDataFromApi();
      }
    }
  }
})
