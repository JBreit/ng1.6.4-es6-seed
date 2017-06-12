const onStartTransitionHandler = (transition) => {
  const authentication = transition.injector().get('Authentication');

  authentication
    .getUserStatus()
    .then((isAuthenticated) => {
      if (!isAuthenticated) {
        console.log(isAuthenticated);
        return transition.router.stateService.target('login');
      }
      console.log(isAuthenticated);
    })
    .catch((err) => {
      console.error(err);
    });
};

const Bootstrap = ($rootScope, $state, $stateParams, $location, $transitions, Authentication) => {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $transitions
    .onStart({ to: '**' }, onStartTransitionHandler);
};

export default Bootstrap;
