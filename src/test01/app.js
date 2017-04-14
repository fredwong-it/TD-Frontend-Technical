import './data-service';
import './app.scss';

export const test01 = {
  template: require('./app.html'),
  controller($scope, dataService, $locale, $log, tmhDynamicLocale) {

    $scope.locale = "en";

    // your code here
    dataService.getData().then(function (response) {
        $scope.items = response.data;
    })

    $scope.change = function() {
      //$log.info(1);
      tmhDynamicLocale.set('en');
      //$log.info($locale);
    }
  }
};
