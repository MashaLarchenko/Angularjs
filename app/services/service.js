angular.module('app').service('gitRepoService', function($http) {
  const service = {
    getAllRepoByQuery: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data;
      });
    },
    
    getAuthorInfo: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }
      
      return service.getAllPeople().then(function (people) {
        return people.find(personMatchesParam)
      });
    }
  }
  
  return service;
})
