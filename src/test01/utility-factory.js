export const utilityFactory = function($window) {  
  var service = {};
  var tabletBreakPoint = 991; 
  var mobileBreakPoint = 767;

  service.isMobile = function() {
    if ($window.innerWidth <= mobileBreakPoint) {
      return "mobile";
    } 
    else if ($window.innerWidth <= tabletBreakPoint){
      return "tablet";
    }
    else {
        return "desktop";
    }
  };

  return service;
}