import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import registerComponent from './register.component';

const Config = ($stateProvider) => {
  $stateProvider
    .state('register', {
      url: '/register',
      component: 'register',
      restricted: false,
    });
};

Config.$inject = ['$stateProvider'];

const registerModule = angular.module('register', [uiRouter])
  .config(Config)
  .component('register', registerComponent)
  .name;

export default registerModule;