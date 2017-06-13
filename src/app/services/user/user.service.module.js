import angular from 'angular';

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  $onInit() {
    this.isAuthenticated = false;
  }
  isAuthenticated() {
    return this.isAuthenticated = true;
  }
}

const userServiceModule = angular.module('user.service', [])
  .service('User', User)
  .name;

export default userServiceModule;
