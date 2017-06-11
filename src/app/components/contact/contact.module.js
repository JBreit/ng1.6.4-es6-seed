import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

const Config = ($stateProvider) => {
  $stateProvider
    .state('contact', {
      url: '/contact',
      component: 'contact',
      restricted: false,
    });
};

Config.$inject = ['$stateProvider'];

const contactModule = angular.module('contact', [uiRouter])
  .config(Config)
  .name;

export default contactModule;
