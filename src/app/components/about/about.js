import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

const Config = ($stateProvider) => {
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about',
      restricted: false,
    });
};

Config.$inject = ['$stateProvider'];

const aboutModule = angular.module('about', [uiRouter])
  .config(Config)
  .component('about', aboutComponent)
  .name;

export default aboutModule;
