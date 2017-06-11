import angular from 'angular';

class User {
  constructor() {
    this.name = 'user';
    this.isAuthenticated = Boolean(false);
  }
  $onInit() {
    console.log(this);
  }
  create() {
    
  }
}

const userServiceModule = angular.module('user.service', [])
  .factory('User', User)
  .name;