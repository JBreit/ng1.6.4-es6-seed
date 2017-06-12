const onStartTransitionHandler = (transition) => {
  const authentication = transition.injector().get('Authentication');

  const checkAuthentication = (isAuthenticated) => {
    if (!isAuthenticated) {
      console.log(isAuthenticated);
      return transition.router.stateService.target('login');
    }
    console.log(isAuthenticated);
  };

  const requestError = (err) => {
    console.error(err);
  };

  authentication
    .getUserStatus()
    .then(checkAuthentication)
    .catch(requestError);
};

const Bootstrap = ($rootScope, $state, $stateParams, $location, $transitions, Authentication) => {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $transitions
    .onStart({ to: '**' }, onStartTransitionHandler);
};

export default Bootstrap;
