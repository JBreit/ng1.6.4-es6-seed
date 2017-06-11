import angular from 'angular';

class Authentication {
  constructor($http) {
    this.name = 'authentication';
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
    console.log(username, password);
  }
  register() {
    console.log(this);
  }
  getUserStatus() {
    return this.$http.get('/data/db.json')
      .then((response) => {
        if (response.data.status === true) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


const authenticationServiceModule = angular.module('authentication.service', [])
  .service('Authentication', ['$http', Authentication])
  .name;

export default authenticationServiceModule;