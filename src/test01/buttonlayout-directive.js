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
        if (!scope.targetEl) {
          // if an element is not defined, it will look for the next available element
          selectedElements = element.children();
          //$log.info(1);
        } else {
          selectedElements = angular.element(element).find(scope.targetEl);
          //$log.info(2);
        }
        selectedElements = angular.element(element).find("button");
        //$log.info(selectedElements);
        scope.checkMobileView();
      });

      // sets height of element
      scope.calculateHeight = function() {
        return $q(function(resolve) {
          var height = 0;

          for (var i = 0; i < selectedElements.length; i++) {
            var offsetHeight = selectedElements[i].offsetWidth;
            //$log.info(offsetHeight);
            if (height < offsetHeight) {
              height = offsetHeight;
              scope.height = height;
            }
          }
          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('width', height + 'px');
          }
          resolve();
        });
      };

      // resets height to auto
      scope.resetHeight = function () {
        return $q(function(resolve) {
          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('width', "auto");      // auto
          }
          resolve();
        });
      };

      scope.setHeight = function () {
        return $q(function(resolve) {
          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('width', '250px');      // auto
          }
          resolve();
        });
      };

      // checks to see if mobile and applies class and styles
      scope.checkMobileView = function() {
          var type = scope.service.isMobile();

        switch (type) {
            case "desktop":
                scope.resetHeight().then(function() {
                    scope.calculateHeight();
                });
                break;
            case "tablet":
                scope.setHeight();
                break;
            case "mobile":
                scope.resetHeight().then(function() {
                    scope.calculateHeight();
                });
                break;
        }
        // if (scope.service.isMobile()) {
        //   scope.resetHeight();
        // } else {
        //   scope.resetHeight().then(function() {
        //     scope.calculateHeight();
        //   });
        // }
      };

      // watches screen resize and re-calculates the height of the elements
      scope.$on('window-resize', function() {
        $timeout(function() {
          scope.checkMobileView();
          //$log.info("resize");
        });
      });
    }
  }


//   return {
//     restrict: 'A',
//     link: function(scope, element, attr) {
//       var maxWidth = 0;

//     //   if (scope.$last === true) {
//     //     $timeout(function() {
//     //       var allButtons = element.find('button');
//     //       $log.info(element.find('button'));
//     //       //check the maximum width of element
//     //       angular.forEach(allButtons, function(ele, ind) {
//     //         //below code will find maxWidth
//     //         maxWidth = ele.innerWidth > maxWidth ? ele.innerWidth : maxWidth;
//     //         //alert(innerWidth);
//     //       });
//     //       //allButtons.css('width', "400px")
//     //       allButtons.text(maxWidth);
          
//     //     });
//     //   }
//         //       var allButtons = element.find('button');
//         //   //check the maximum width of element
//         //   angular.forEach(allButtons, function(ele, ind) {
//         //     //below code will find maxWidth
//         //     maxWidth = ele.innerWidth > maxWidth ? ele.innerWidth : maxWidth;
//         //   });
//         //   allButtons.css('width', maxWidth)
//         //   allButtons.text(maxWidth);
//     }
//   }
}
