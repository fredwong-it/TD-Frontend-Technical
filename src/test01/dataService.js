export const dataService = function($http) {
  this.somevariable = 'somevalue';


  this.getData = function() {
      return $http.get('test01/data.json');
  }
};
