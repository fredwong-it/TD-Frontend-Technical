import './dataService';

export const test01 = {
  template: require('./app.html'),
  controller($scope, dataService) {
    
    // your code here
    dataService.getData().then(function (response) {
        $scope.items = response.data;
    })
  }
};
