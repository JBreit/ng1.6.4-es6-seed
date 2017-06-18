import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import loginComponent from './login.component';

const Config = ($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login',
      restricted: false,
    });
};

Config.$inject = ['$stateProvider'];

const loginModule = angular.module('login', [uiRouter])
  .config(Config)
  .component('login', loginComponent)
  .name;

export default loginModule;