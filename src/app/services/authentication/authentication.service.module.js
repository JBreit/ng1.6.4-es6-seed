import angular from 'angular';

const getData = (response) => {
  if (response.status === 200 && response.statusText === 'ok') {
    return response.data;
  }
};

const getStatus = (data) => {
  if (data && data.status === true) {
    return true;
  } else {
    return false;
  }
};

class Authentication {
  constructor($q, $timeout, $http) {
    this.name = 'authentication';
    this.$q = $q;
    this.$timeout = $timeout;
    this.$http = $http;
  }
  $onInit() {
    console.log(this);
  }
  isLoggedIn() {
    if (status) {
      return true;
    }
    return false;
  }
  login(username, password) {
    const deferred = $q.deferred();

    this.$http.post('/user/login', { username, password })
      .then(getData)
      .then((data) => {
        if (data.status && data.status === true) {
          deferred.resolve(data.status);
        }
        deferred.reject(data.status);
      })
      .catch(data => deferred.reject(data));

    return deferred.promise;
  }
  register() {
    console.log(this);
  }
  getUserStatus() {
    return this.$http.get('/data/db.json')
      .then(getData)
      .then(getStatus)
      .catch(err => { console.error(err); });
  }
}

const authenticationServiceModule = angular.module('authentication.service', [])
  .service('Authentication', ['$q', '$timeout', '$http', Authentication])
  .name;

export default authenticationServiceModule;