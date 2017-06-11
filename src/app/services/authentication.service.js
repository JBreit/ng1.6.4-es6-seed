import angular from 'angular';

const Authentication = ['$q', '$timeout', '$http', ($q, $timeout, $http) => {
  this.isLoggedIn = () => {
    if (user && user.isAuthenticated) {
      return true;
    }
    return false;
  };

  this.login = (username, password) => {
    const deferred = $q.deferred();

    $http.post().then((response) => { console.log(response); }).catch((err) => { console.error(err); });
  };

  this.register = () => {};
}];

const authenticationService = angular.module('AuthenticationService', [])
  .service('Authentication', Authentication).name;

export default authenticationService;
