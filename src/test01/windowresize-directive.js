export const windowResize = function($window, $rootScope, $log) {  
  return {
    restrict: 'CA',
    link: function(scope) {
      angular.element($window).on('resize', function(e) {
        scope.$broadcast('window-resize', {
          'eventTarget': e.target
        });
        //$log.info(1);
        $rootScope.$broadcast('window-resize', {
          'eventTarget': e.target
        });
      });
    }
  };
}