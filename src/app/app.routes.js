import NotFound from './notfound';

const handleError = ($injector) => {
  $injector.invoke(['$state', $state => $state.transitionTo('404', {}, false)]);
};

const Routes = ($stateProvider, $urlRouterProvider, $locationProvider) => {

  $locationProvider
    .html5Mode(true)
    .hashPrefix('!');

  $stateProvider
    .state('404', NotFound);

  $urlRouterProvider
    .otherwise(handleError);
};

Routes.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
];

export default Routes;
