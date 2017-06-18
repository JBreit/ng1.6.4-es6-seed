import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navlinkComponent from './navlink.component';

const navlinkModule = angular.module('navlink', [])
  .component('nav-link', navlinkComponent)
  .name;

export default navlinkComponent;
