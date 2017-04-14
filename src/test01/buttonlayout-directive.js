import './utility-factory';

export const buttonLayout = function($timeout, $q, utilityFactory, $log) {
return {
    restrict: 'CAD',
    scope: {
      targetEl: '@targetElement'
    },
    link: function(scope, element) {
      var selectedElements;

      scope.height = null;
      scope.service = utilityFactory;

      $timeout(function() {
        selectedElements = angular.element(element).find("button");
        scope.adjustButtonLayout();
      });

      // sets height of element
      scope.calculateHeightWidth = function() {
        return $q(function(resolve) {
          var height = 0;
          var width = 0;
          
          for (var i = 0; i < selectedElements.length; i++) {
            var offsetHeight = selectedElements[i].offsetHeight;
            var offsetWidth = selectedElements[i].offsetWidth;

            $log.info(selectedElements[i]);       

            if (height < offsetHeight) {
              height = offsetHeight;
              scope.height = height;
            }

            if (width < offsetWidth) {
              width = offsetWidth;
              scope.width = width;
            }
          }

          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('height', height + 'px');
            
            // add 1 to fix the word breadking issue for "Review my everyday banking needs" in mobile
            angular.element(selectedElements[i]).css('width', width + 1 + 'px');
          }
          resolve();
        });
      };

      // resets height to auto
      scope.resetHeightWidth = function () {
        return $q(function(resolve) {
          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('height', "auto");      // auto
            angular.element(selectedElements[i]).css('width', "auto");      // auto
          }
          resolve();
        });
      };

      // checks to see if mobile and applies class and styles
      scope.adjustButtonLayout = function() {
        //$log.info(2);
        scope.resetHeightWidth().then(function() {
          scope.calculateHeightWidth();
        });
      };

      // watches screen resize and re-calculates the height of the elements
      scope.$on('window-resize', function() {
        $timeout(function() {
          scope.adjustButtonLayout();
        });
      });
    }
  }
}
