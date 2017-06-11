const on$stateChangeStart = (transition) => {
  const authentication = transition.injector().get('Authentication');

  authentication
    .getUserStatus()
    .then((isAuthenticated) => {
      if (!isAuthenticated) {
        console.log('not authenticated');
        return transition.router.stateService.target('login');
      }
    });
};

const Runtime = ($rootScope, $state, $stateParams, $location, $transitions, Authentication) => {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $transitions
    .onStart({ to: '**' }, on$stateChangeStart);
};

export default Runtime;
