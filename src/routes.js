export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('test01', {
      url: '/test01',
      component: 'test01'
    })
    .state('test02', {
      url: '/test02',
      component: 'test02'
    });
}
