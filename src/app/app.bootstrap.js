const onStartTransitionHandler = (transition) => {
  const authentication = transition.injector().get('Authentication');

  const checkAuthentication = (isAuthenticated) => {
    if (!isAuthenticated) {
      return transition.router.stateService.target('login');
    }
  };

  const requestError = (err) => {
    console.error(err);
  };

  authentication.getUserStatus()
    .then(checkAuthentication)
    .catch(requestError);
};

const Bootstrap = ($transitions, Authentication) => {
  'ngInject';

  $transitions
    .onStart({ to: '**' }, onStartTransitionHandler);
};

export default Bootstrap;
