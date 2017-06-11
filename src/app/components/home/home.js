import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

const Config = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      restricted: false,
    });

  $urlRouterProvider
    .otherwise('/');
};

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

const homeModule = angular.module('home', [uiRouter,])
  .config(Config)
  .component('home', homeComponent)
  .name;

export default homeModule;
